import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@common/button/button'

import car from '@public/images/car.svg'

import styles from './introduction.module.css'

const AnimImage = motion(Image)

const animation = {
    hidden: {
        opacity: 0,
        x: 200,
    },
    visible: {
        opacity: 1,
        x: 0,
    },
}

const Introduction = () => {
    return (
        <section className={styles.section} data-title={'introduction'}>
            <div className={styles.image}>
                <AnimImage
                    initial='hidden'
                    whileInView='visible'
                    variants={animation}
                    viewport={{ once: true }}
                    src={car}
                    alt='car'
                    className={styles.car}
                />
            </div>

            <h2 className={styles.headline}>
                Do you often drive
                <br /> to another state by car?
                <br /> Then earn with
                <br /> IZZI RIDE
            </h2>

            <Button href='/' title='Download app' className={styles.download_btn} />
        </section>
    )
}

export default Introduction