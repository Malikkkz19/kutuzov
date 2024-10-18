import styles from './Content.module.scss';

const Content = () => {
    return (
        <div className={styles.body}>
            <div className={styles.header}>
               <img className={styles.leftGeorg} src="/public/лента1.png" alt=""/>
                <img className={styles.centerGeorg} src="/public/Кленте2.png" alt=""/>
                <img className={styles.rightGeorg} src="/public/лента2.png" alt=""/>
            </div>
            <div className={styles.content}>
                <img className={styles.imgKutuzov} src="/public/Kutuzov.png" alt=""/>
                <div className={styles.leftDesc}>
                    <img className={styles.text1} src="/public/123.png" alt=""/>
                </div>
                <div className={styles.rightDesc}>
                    <img className={styles.text21} src="/public/подпись2.png" alt=""/>
                    <img className={styles.text22} src="/public/123.png" alt=""/>
                    <img className={styles.text23} src="/public/подпись.png" alt=""/>
                </div>
                <img className={styles.horseRider} src="/public/Конь.png" alt=''/>
                <img className={styles.imgKutuz} src="/public/1122.png" alt=''/>
                <div className={styles.blockShield}>
                    <img className={styles.imgShield} src="/public/Желт.png" alt=""/>
                    <img className={styles.imgEagle} src="/public/Орел.png" alt=""/>
                    <img className={styles.descTitle} src="/public/ПодписьЦентрверх.png" alt=''/>
                    <img className={styles.descEssential} src="/public/ПодписьЦентр.png"/>
                    <img className={styles.imgOrden1} src="/public/Орден1.png" alt=''/>
                    <img className={styles.imgOrden2} src="/public/Орден2.png" alt=''/>
                    <img className={styles.imgOrden3} src="/public/Орден3.png" alt=''/>
                    <img className={styles.imgOrden4} src="/public/Орден4.png" alt=''/>
                    <img className={styles.imgOrden5} src="/public/Орден5.png" alt=''/>
                    <img className={styles.imgOrden6} src="/public/Орден6.png" alt=''/>
                    <img className={styles.imgOrden7} src="/public/Орден7.png" alt=''/>
                    <img className={styles.imgOrden8} src="/public/Орден8.png" alt=''/>
                    <img className={styles.imgOrden9} src="/public/Орден9.png" alt=''/>
                    <img className={styles.imgOrden10} src="/public/Орден10.png" alt=''/>
                    <div className={styles.descShield1}>
                        <img className={styles.imgDescShield1} src="/public/Подпись6.png" alt=""/>
                    </div>
                    <div className={styles.descShield2}>
                        <img className={styles.imgDescShield2} src="/public/Подпись7.png" alt=""/>
                    </div>
                    <div className={styles.descShield3}>
                        <img className={styles.imgDescShield3} src="/public/Подпись8.png" alt=""/>
                    </div>
                </div>
                <div className={styles.descMid1}>
                    <img className={styles.imgDescMid1} src="/public/Подпись5.png" alt=""/>
                </div>
                <div className={styles.descMid2}>
                    <img className={styles.imgDescMid2} src="/public/Подпись15.png" alt=""/>
                </div>
                <img className={styles.imgHorse2} src="/public/horse2.png" alt=""/>
                <img className={styles.imgWar} src="/public/333.png" alt=""/>
                <img className={styles.imgDeath} src="/public/222.png" alt=""/>
                <div className={styles.descBottom1}>
                    <img className={styles.imgDescMid1} src="/public/Подпись3.png" alt=""/>
                </div>
                <div className={styles.descBottom2}>
                    <img className={styles.imgDescMid2} src="/public/Подпись4.png" alt=""/>
                </div>
                {/*<div className={styles.descBottom3}>*/}
                {/*    <img className={styles.imgDescMid2} src="/public/Подпись15.png" alt=""/>*/}
                {/*</div>*/}
                <div className={styles.descBottom4}>
                    <img className={styles.imgDescMid4} src="/public/Подпись9.png" alt=""/>
                </div>
                <div className={styles.descBottom5}>
                    <img className={styles.imgDescMid5} src="/public/Подпись10.png" alt=""/>
                </div>
                <div className={styles.descBottom6}>
                    <img className={styles.imgDescMid6} src="/public/Подпись11.png" alt=""/>
                </div>
                <div className={styles.descBottom7}>
                    <img className={styles.imgDescMid7} src="/public/Подпись12.png" alt=""/>
                </div>
                <div className={styles.descBottom8}>
                    <img className={styles.imgDescMid8} src="/public/Подпись13.png" alt=""/>
                </div>
                <div className={styles.descBottom9}>
                    <img className={styles.imgDescMid9} src="/public/Подпись14.png" alt=""/>
                </div>
            </div>
        </div>)
}

export default Content;