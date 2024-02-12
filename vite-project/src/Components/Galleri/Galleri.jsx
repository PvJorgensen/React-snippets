import { useEffect, useState } from "react"
import axios from "axios"
import styles from './Galleri.module.scss'

export const Gallery = () => {
    const [apiData, setApiData] = useState([])
    const [selectedImage, setSelectedImage] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)

    const getData = async () => {
        const url = `http://localhost:3000/posters?limit=6`
        const result = await axios.get(url)
        console.log(result.data);
        setApiData(result.data);
    }

    useEffect(() => {
        getData()
    }, [setApiData])

    const openModal = (image) => {
        setSelectedImage(image)
        setModalOpen(true)
    }

    const closeModal = () => {
        setSelectedImage(null)
        setModalOpen(false)
    }

    return (
        <div>
            <h1>Gallery</h1>
            <div className={styles.PostersWrapper}>
                {apiData && apiData.map(item => {
                    const array_genre = item.genres.map(a=> a.title)
                    return (
                        <div className={styles.indhold} key={item.id} onClick={() => openModal(item.image)}>
                            <img src={item.image} alt={item.title} />
                        </div>
                    )
                })}
            </div>

            {modalOpen && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <span className={styles.close} onClick={closeModal}>&times;</span>
                        <img src={selectedImage} alt="Selected Image" />
                    </div>
                </div>
            )}
        </div>
    )
}
