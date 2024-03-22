import useSectionProperties from '@hooks/use-section-properties'
import FadeInOnScroll from '@hoc/fade-in-on-scroll'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@common/button/button'

import scrollTo from '@helpers/scrollTo'

import car from '@public/images/home-page/car.png'
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
	const { sectionPositions } = useSectionProperties()

	function scroll() {
        scrollTo(sectionPositions['download at'].top)
	}

	return (
		<section className={styles.section} data-title='introduction'>
			<FadeInOnScroll>
				<div className={styles.image}>
					<AnimImage
						initial='hidden'
						whileInView='visible'
						variants={animation}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 1 }}
						src={car}
						alt='car'
						className={styles.car}
					/>
				</div>

				<h2 className={styles.headline}>
					Do you often drive
					<br /> to another state by car?
					<br /> Then sage with
					<br /> iZZi RIDE
				</h2>

				<Button title='Download app' className={styles.download_btn} callback={scroll} />
			</FadeInOnScroll>
		</section>
	)
}

export default Introduction