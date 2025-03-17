import React from "react";
import resources from "../data/ressurser";

function Resources({ category }) {
    // Filtrerer ressurser basert på kategori
    const filteredResources = resources.filter(resource => resource.category === category);

    return (
        <div>
            {/*Viser en liste over filtrerte ressurser */}
            <ul>
                {filteredResources.map((resource, index) => (
                    <li key={index}>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                            {resource.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Resources;
