"use client";

import skills from './skills.module.css';
import { useState, useEffect, useRef } from 'react';

function Categories({ info }) {
    // const [bulletsCreated, setBulletsCreated] = useState(0);

    const placeholder = info;

    // console.log(info);

    // Object.keys(info).map((key, index) => {
    //     console.log(key);
    //     console.log(info[key]);
    // });

    // info.map((c, index) => {
    //     console.log("test map");
    // });


    {/* <p>TESTEST</p> */}
        {/* {Object.keys(placeholder).map((key, index) => {
            <Category
                category={key}
                body={info[key]}
                bulletsCreated={bulletsCreated}
                setBulletsCreated={setBulletsCreated}
                key={`category-${index}`} />
        })} */}



    return placeholder.map((c, index) => {
        // DO SOMETHING
        // console.log("TEST");
        <p key={index}>TEST</p>

        // <Category
        //     category={c.category}
        //     body={c.bulletpoints}
        //     bulletsCreated={bulletsCreated}
        //     setBulletsCreated={setBulletsCreated}
        //     key={`category-${index}`} />
    });
}

export function Category({ category, body }) {
    return (<>
        <div className={skills.category} id={`${category}-container`}>
            <div className={`${skills.categoryHeader} lalezarRegular`}>
                <p>{category}</p>
            </div>
            <div className={`${skills.categoryBody} makoRegular`}>
                <CategoryBody 
                    category={category}
                    body={body} />
            </div>
        </div>
    </>);
}

function CategoryBody({ category, body }) {
    const [bulletsCreated, setBulletsCreated] = useState(false);
    const categoryRef = useRef(null);

    useEffect(() => {
        if (categoryRef.current && !bulletsCreated) {
            let res = [];
            let curList = [];
            for (let i = 0; i < body.length; i++) {
                if (i !== 0 && i % 3 === 0) {
                    res.push(curList);
                    curList = [];
                }
                curList.push(body[i]);
            }

            if (curList.length > 0) {
                res.push(curList);
            }

            // console.log(categoryRef.current);
            res.forEach(element => {
                categoryRef.current.appendChild(CreateBullets(element));
            });

            setBulletsCreated(true);
        }
    }, []);


    function CreateBullets(list) {
        let res = document.createElement("ul");
        list.forEach(bullet => {
            let cur = document.createElement("li");
            cur.innerHTML = bullet;
            res.appendChild(cur);
        });

        return res;
    }

    return <div className="d-flex" id={`${category}`} ref={categoryRef}></div>;
}