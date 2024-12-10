"use client";

import { useState, useEffect, useRef } from 'react';

export function CategoryBody({ category, body }) {
    const [bulletsCreated, setBulletsCreated] = useState(false);
    const categoryRef = useRef(null);

    useEffect(() => {
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

        if (categoryRef.current && !bulletsCreated) {
            console.log(categoryRef.current);
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

    return <div id={`${category}`} ref={categoryRef}></div>;
}