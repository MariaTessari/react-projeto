export  function Header({tema, toggleTema}){
    return(
        <div className="header-container">
            <h1>Cine<span>Estu</span></h1>
            <button className="btn-theme" onClick={toggleTema}>
                {tema === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
        </div>
    )
}