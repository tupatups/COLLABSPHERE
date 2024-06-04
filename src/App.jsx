import { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
import LoginPage from "./components/LoginPage.jsx";
import SignUpPage from "./components/SignUpPage.jsx";
import app from "./firebase.js"
import {getFirestore, addDoc, collection, getDocs, getDoc} from "firebase/firestore"
import { getAuth } from "firebase/auth";

export default function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  //permanently added the projects on sidebar
  const auth = getAuth(app)

 
  const fetchProject = async (user) => {
    try{  
    const db = getFirestore(app)
    const user = auth.currentUser;
    const colRef = collection(db, "users", user.uid, "projects")
    const projectSnapshot = await getDocs(colRef)
    const projectList = projectSnapshot.docs.map(doc => ({
      id: doc.id, 
      ...doc.data(),
    }))
    setProjectsState(prevState => ({
      ...prevState,
      projects: projectList,
    }))
  }catch (error) {
    console.error(error);
  }
  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          fetchProject(user);
        } else {
          console.log('No user is signed in.');
          // Handle case where no user is signed in, e.g., clear projects state or show a message
          setProjectsState(prevState => ({
            ...prevState,
            projects: [],
          }));
        }
      });
    
      // Cleanup subscription on unmount
      return () => unsubscribe();
  }, []);


  }
  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    const db = getFirestore(app)
    const user = auth.currentUser
    const colRef = collection(db, "users", user.uid, "projects")

    addDoc(colRef, projectData)
    .then((docRef) => {
      setProjectsState((prevState) => {
        const newProject = {
         ...projectData,
         id: docRef.id,
        };
    
        return {
          ...prevState,
          selectedProjectId: undefined,
          projects: [...prevState.projects, newProject],
       };
      });
    })
    .catch((error) => {
      console.log("error", error)
    })
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/dashboard",
      element: (
        <>
          <main className="h-screen flex gap-8">
            <ProjectsSidebar
              onStartAddProject={handleStartAddProject}
              projects={projectsState.projects}
              onSelectProject={handleSelectProject}
              selectedProjectId={projectsState.selectedProjectId}
            />
            {content}
          </main>
        </>
      ),
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
