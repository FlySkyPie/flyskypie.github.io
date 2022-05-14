import React, { useEffect, useMemo, useRef, useState } from 'react';
import randomInteger from 'random-int';

import styles from './styles.module.css';
import { list } from './utils';

const ProjectGenerator: React.FC = () => {
    const [id, setId] = useState(0);
    const [pause, setPause] = useState(false);
    const pauseRef = useRef(pause);
    pauseRef.current = pause;

    const timer = useRef<NodeJS.Timeout>();

    useEffect(() => {
        timer.current = setInterval(() => {
            if (pauseRef.current) {
                return;
            }
            const newId = randomInteger(list.length - 1);
            setId(newId);
        }, 200);
        return () => {
            clearInterval(timer.current);
        }
    }, []);

    const project = useMemo(() => list[id], [id]);

    return (
        <div className={styles.projectGenerator}>
            <div className={styles.title} style={{ position: 'relative', overflowAnchor: 'none' }}>
                <div
                    style={{
                        position: 'absolute',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        transform: 'translate(-50%, -50%)',
                        top: '50%',
                        left: '50%',
                        width: 'fit-content'

                    }}
                    onMouseEnter={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}>

                    <p className={styles.projectName} children={project.name} />
                    {project.subName &&
                        <p className={styles.projectSubName} children={project.subName} />}
                </div>
            </div>
            <img className={styles.zombie} src={require('./mine-zombie-lookup.png').default} />
        </div >
    );
}

export default ProjectGenerator;