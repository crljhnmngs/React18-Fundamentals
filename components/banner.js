import styles from "./banner.module.css";

const subtitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "coral",
}

const Banner = ({children}) => {
    return(
        <header className="row">
            <div className="col-5 mb-4">
            <img src="./logo.png" alt="logo" 
            className={styles.logo}/>
            </div>
            <div className="col-7 mt-5" style={subtitleStyle}>
            {children}
            </div>
        </header>
    );
};

// ---------------Using Props-------------

/* const Banner = (props) => {
    return(
        <header className="row">
            <div className="col-5 mb-4">
            <img src="./logo.png" alt="logo" 
            className={styles.logo}/>
            </div>
            <div className="col-7 mt-5" style={subtitleStyle}>
            {props.headerText}
            </div>
        </header>
    );
    };
*/
export default Banner; 