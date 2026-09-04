export default function Header({ tema, toggleTema }){
    return(
        <div className="container">
            <div>
                <h1>Cine<strong>sTu</strong></h1>

                <button className="btn-theme" onClick={toggleTema}>

                    {tema === "light" ? "dark" : "light"}
                </button>
            </div>

        </div>
    )
}