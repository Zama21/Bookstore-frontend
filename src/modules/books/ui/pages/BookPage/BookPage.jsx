import React from 'react'
import { useParams } from 'react-router-dom'
import stl from './BookPage.module.css'
import BookViewBox from './components/BookViewBox/BookViewBox'
import SwitchingBox from './components/SwitchingBox/SwitchingBox'
import TableContents from './components/TableСontents/TableСontents'

export const BookPage = () => {
	const { bookId } = useParams()

	return (
		<>
			<main>
				<div className={stl.wrapper}>
					<BookViewBox></BookViewBox>
					<TableContents></TableContents>
					<SwitchingBox></SwitchingBox>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
						labore iusto, nesciunt recusandae fugiat quo ipsum cumque et
						laudantium provident pariatur fugit quibusdam nemo debitis assumenda
						aperiam minus voluptatibus quam. Rerum sequi voluptatibus
						perferendis inventore omnis corporis consequuntur cumque adipisci
						quia exercitationem iste commodi corrupti voluptatum, debitis
						mollitia aperiam accusamus quidem. Quo facere perferendis natus unde
						hic, recusandae velit minus nobis adipisci numquam quae cumque
						consequuntur expedita, dolores consequatur iusto tempore commodi,
						repellendus voluptatibus molestiae beatae? Ipsa, ipsum. Amet animi
						beatae illo, iure ipsum omnis sint similique ducimus officiis quod
						obcaecati eligendi dicta sapiente perspiciatis. Sed maiores libero
						deleniti ullam laborum cupiditate, aliquam laudantium et commodi
						minus dolorem temporibus earum voluptates, alias repudiandae
						asperiores officiis itaque? Non aspernatur maiores dolore voluptates
						assumenda a quibusdam neque. Ea, libero magni? Magnam, nisi
						quibusdam similique voluptatum rerum exercitationem rem sit
						dignissimos fugit aspernatur omnis velit nam voluptates qui a.
						Aperiam modi animi eaque repellendus minus numquam excepturi harum
						facilis nam illum aspernatur quos dolores eligendi quibusdam
						consequuntur quia delectus optio culpa exercitationem, vel error
						tempore dicta id? Quasi laboriosam autem repudiandae, ipsa earum
						eveniet. Adipisci distinctio illum a quibusdam earum aperiam,
						suscipit, ipsam porro sint ipsum quisquam repellat, assumenda itaque
						nihil! Rerum nam, aliquid excepturi distinctio omnis, sit debitis
						sunt praesentium obcaecati ullam quibusdam consequatur! Quasi
						reprehenderit eum architecto dolorem sapiente recusandae quibusdam
						neque reiciendis dolore ut at debitis aperiam soluta esse dolorum
						expedita, iusto cumque. Perferendis dolorum sequi, repellendus,
						ipsum fugiat ipsam itaque quam esse inventore animi sit similique,
						cum hic quod possimus libero quo incidunt consequuntur? Doloribus
						vel nesciunt nihil, eos dicta recusandae quibusdam, quae rem
						deleniti odio accusantium voluptas ipsum praesentium nam maxime
						doloremque libero hic tempore nobis ut enim voluptatum. Officiis
						corporis odio voluptatem dignissimos facilis, fugiat reprehenderit,
						excepturi provident quam rem voluptatibus incidunt deserunt nobis et
						laborum vitae?
					</p>
				</div>
			</main>
			<footer>aenth</footer>
		</>
	)
}
