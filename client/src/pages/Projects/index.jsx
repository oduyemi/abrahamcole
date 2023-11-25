import React, { useEffect } from "react";
import { SelectionCard } from "../../components/Selection";



const Projects = () => {
    useEffect(() => {
        document.body.classList.add('projects');
        return () => {
          document.body.classList.remove('projects');
        };
      }, []);
    return (
        <div>
            <SelectionCard />
        </div>
    );
};

export default Projects;
