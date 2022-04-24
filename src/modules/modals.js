const modal = () => {

    function fn(trigger, modal, close) {
        trigger.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault()
            }
            modal.style.display = 'block'
        })
        close.addEventListener('click', () => modal.style.display = 'none')
    }

    const getTrigger = document.querySelector('.popup_engineer_btn')
    const getModal = document.querySelector('.popup')
    const getPopupClose = document.querySelector('.popup_close')

    fn(getTrigger, getModal, getPopupClose)
}

export default modal