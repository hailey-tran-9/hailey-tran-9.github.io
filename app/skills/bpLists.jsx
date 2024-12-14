"use client";

import skills from './skills.module.css';

// Create separate lists
export function AllLists({ categories, bulletpoints }) {
    let groupsOfThree = [];
    for (let i = 0; i < bulletpoints.length; i++) {
        groupsOfThree.push([]);

        // console.log(`# of bulletpoints in category ${bulletpoints[i].length}`);
        let numLists = bulletpoints[i].length / 3;
        for (let j = 0; j < numLists; j++) {
            groupsOfThree[i].push([]);
        }
    }

    for (let curCategory = 0; curCategory < bulletpoints.length; curCategory++) {
        // console.log(`cur category ${bulletpoints[curCategory]}`);

        let curList = 0;
        bulletpoints[curCategory].forEach(bp => {
            if (groupsOfThree[curCategory][curList].length === 3) {
                curList += 1;
            }
            groupsOfThree[curCategory][curList].push(bp);
        });
    }

    console.log(groupsOfThree);

    return <>
        {categories.map((category, index) => 
            <div className={skills.category} id={`${category}-container`} key={category}>
                <div className={`${skills.categoryHeader} lalezarRegular`}>
                    <p>{category}</p>
                </div>
                <div className={`${skills.categoryBody} d-flex makoRegular`}>
                    <BPList lists={groupsOfThree[index]} />
                </div>
            </div>
        )}
    </>;
}

function BPList({ lists }) {
    console.log(`BPList ${lists}`);

    return <>
        {lists.map((list, index) => 
            <ul className="flex-fill" key={index}>
                {list.map((bp, index) => 
                    <li key={index}>{bp}</li>
                )}
            </ul>
        )}
    </>;
}