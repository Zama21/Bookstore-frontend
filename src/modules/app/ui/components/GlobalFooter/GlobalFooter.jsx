import React from 'react'
import stl from './GlobalFooter.module.css'
import imgVk from './img/vk.png'
import imgTg from './img/tg.png'
import imgYouTube from './img/youtube.png'
import imgClassMates from './img/classmates.png'
import imgFon from './img/fon.png'
import LicenseAgreement from './component/licenseAgreement/LicenseAgreement'

export default function GlobalFooter() {
	return (
		<>
			<div className={stl.footerTopWaves}>
				<div className={`${stl.wave} ${stl.wave1}`}></div>
				<div className={`${stl.wave} ${stl.wave2}`}></div>
				<div className={`${stl.wave} ${stl.wave3}`}></div>
				<div className={`${stl.wave} ${stl.wave4}`}></div>
			</div>
			<div className={stl.wrapperFooter}>
				<footer className={`${stl.pageFrame}`}>
					<div className={stl.wrapperColumns}>
						<div className={`${stl.column} ${stl.columnCenter}`}>
							<h4 className={stl.socialNetworksTitle}>Полезная информация: </h4>
							<LicenseAgreement />
							<p>О Литтеррии</p>
							<p>Авторы портала</p>
							<p>Правила размещения авторского контента</p>
						</div>
						<div className={stl.smallColumn}>
							<h4 className={stl.socialNetworksTitle}>Мы везде: </h4>
							<div className={stl.wrapperSocialNetworks}>
								<a
									className={stl.socialNetworkLink}
									href='https://vk.com/video-11254710_456241594'
									target='_blank'
									rel='noopener noreferrer'
								>
									<img src={imgVk} alt='Вк' />
								</a>
								<a
									className={stl.socialNetworkLink}
									href='https://t.me/rhymestg/76314'
									target='_blank'
									rel='noopener noreferrer'
								>
									<img src={imgTg} alt='ТГ' />
								</a>
								<a
									className={stl.socialNetworkLink}
									href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
									target='_blank'
									rel='noopener noreferrer'
								>
									<img src={imgYouTube} alt='Ютуб' />
								</a>
								<a
									className={stl.socialNetworkLink}
									href='https://ok.ru/video/16363884850'
									target='_blank'
									rel='noopener noreferrer'
								>
									<img src={imgClassMates} alt='ClassMates' />
								</a>
							</div>
							<p className={stl.warningNotice}>
								<span className={stl.labelDanger}>18+</span>Внимание! Сайт может
								содержать материалы, не предназначенные для просмотра лицами, не
								достигшими 18 лет!
							</p>
						</div>
					</div>
					<div className={stl.wrapperBottom}>
						<img src={imgFon} alt='' />
					</div>
				</footer>
			</div>
		</>
	)
}
