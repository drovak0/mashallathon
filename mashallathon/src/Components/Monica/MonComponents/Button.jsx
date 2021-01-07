import style from "../Monica.module.css"
import bubble from "./Bubble.module.css"

const Button = ({bubbles, setBubbles}) => {
    const formHandler = (e) => {
        console.log(e)
        e.preventDefault();
        setBubbles([
            ...bubbles,
            {
                style: {
                    background: "lightblue",
                    height: "60px",
                    width: "60px",
                    display: "inline-block",
                    border: "0.5px solid white",
                    boxShadow: "1px 1px gray",
                    borderRadius: "50%",
                },
            },
        ])
    }
    return (
        <div className={bubble.bubbles}>
            <form onSubmit={formHandler}>
                <button className={style.btn} type="submit">Click Me!</button>
            </form>
            <div className={bubble.showBubbles}>
                {bubbles.map((bub, i) => (
                    <div key={i} style={bub.style} className={bubble.oneBubble}></div>
                ))}
            </div>
        </div>)
}

export default Button