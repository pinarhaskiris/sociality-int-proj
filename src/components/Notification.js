const Notification = ( { n, brand } ) => {

    /* if brand button, place it on top right corner */
    if (brand) {
        return (
            <span className="border-0 position-absolute top-0 start-100 translate-middle badge rounded-pill">
            {n}
            </span> 
        )
    }
    /* if not brand button, it is accordion menu item, place the notification on the side */
    else {
        return (
        <span className="border-0 badge rounded-pill ">{n}</span>
        )
    }
}

export default Notification
