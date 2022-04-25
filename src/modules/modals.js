const modal = () => {

    function bindModal(trigger, modal, close) {
        const getTrigger = document.querySelectorAll(trigger),
            getModal = document.querySelector(modal),
            getPopupClose = document.querySelector(close)

        getTrigger.forEach((item) => item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault()
                }

                getModal.style.display = 'block'
                document.body.style.overflow = 'hidden'

            })
        )


        getPopupClose.addEventListener('click', () => {
            getModal.style.display = 'none'
            document.body.style.overflow = 'hidden'
        })
        getModal.addEventListener('click', () => {
            getModal.style.display = 'none'
            document.body.style.overflow = 'hidden'
        })
    }


    bindModal('.popup_engineer_btn', '.popup', '.popup_close');
}


export default modal