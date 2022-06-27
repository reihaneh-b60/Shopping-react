import './menuStyle.css'
const Menu_1 = (props) => {
    return (
        <>
            <div className="min_box d-flex flex-column justify-content-around">
                <div className="w-100 h-50 text-center"><img src={props.image}></img></div>
                <div><p className="text-center fs-6">{props.text}</p></div>
            </div>

        </>
    )
}
export default Menu_1;