import { startLoading, stopLoading, loadingMessage } from "./loading"
import { getVideoId, loadVideo } from "./youtube-api"

const form = document.querySelector('#form')

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    try {
        loadingMessage('Iniciando a aplicação')
        startLoading()

        // pegar o form
        const formData = new FormData(form)
        const url = formData.get('url')   
        await loadVideo(url)

        loadingMessage('Conectando com o backend')
        await axios.get('http://localhost:3333/audio?v=' = getVideoId(url))
    } catch(error) {
        console.log('[SUBMIT_ERROR]', error)
    } finally {
        stopLoading()
    }
})