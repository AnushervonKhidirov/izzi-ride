import Image from 'next/image'
import Link from 'next/link'
import logo from '@public/images/common/logo.png'

import styles from './logo.module.css'

const Logo = ({ className, callback }: { className?: string; callback?: () => void }) => {
    return (
        <Link href='/' title='iZZi' className={className} onClick={callback}>
            <Image src={logo} alt='iZZi logo' className={styles.logo} priority />
        </Link>
    )
}

export default Logo
