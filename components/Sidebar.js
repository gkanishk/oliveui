import ListArray from "../assets/listArray.json";
import styles from '../styles/Sidebar.module.css';
import Link from 'next/link'

import { useRouter } from 'next/router';

export function Sidebar(){
    const {pathname} = useRouter();
    const getListClassName=(name)=>{
        if(pathname.toUpperCase().includes(name.toUpperCase()))
        return (styles.selected)
        else if(pathname==="/docs" && name==="Getting Started")
        return (styles.selected)
    }
    return (
        <div className={styles.sidebarContainer}>
            {
                ListArray.map(list=>{
                    return list.type==="Category"
                    ?
                    <h3 className={styles.title} key={list.name}>{list.name}</h3>
                    :
                    <Link href={list.link} key={list.name}>
                        <a className={getListClassName(list.name)}>
                        {list.name}
                        </a>
                    </Link>
                })
            }

        </div>
    )
}