'use client'
import type { FC } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { owners } from './constant'
import styles from './slider.module.css'

export type Slide = {
    image: string
    about: string
    name: string
    position: string
}

const animation = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
}

const Slider: FC = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            variants={animation}
            viewport={{ amount: 0.4, once: true }}
            className={styles.owners_section}
            data-title={'owners'}
        >
            <div>
                <h1 className={styles.headline}>Application Creation History</h1>
                <div className={styles.arrows}>
                    <div className={`${styles.slider_arrow} ${styles.prev}`}></div>
                    <div className={`${styles.slider_arrow} ${styles.next}`}></div>
                </div>
                <div className={styles.slider}>
                    {owners.map(owner => (
                        <Slide
                            key={owner.name}
                            image={owner.image}
                            name={owner.name}
                            position={owner.position}
                            about={owner.about}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

const Slide: FC<Slide> = ({ image, name, position, about }) => {
    return (
        <div className={styles.slide}>
            {/* <Image src={image} alt={name} className={styles.image} /> */}
            <div className={styles.image} />
            <div className={styles.slider_copy}>
                <div className={styles.quotes}></div>
                <div className={styles.about} dangerouslySetInnerHTML={{ __html: about }} />
                <strong className={styles.name}>{name}</strong>
                <div className={styles.position}>{position}</div>
            </div>
        </div>
    )
}

export default Slider