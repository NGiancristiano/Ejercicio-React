import React from "react";

function NavItemAc () {
    let actions = [{name:'Pages',icon:'fas fa-fw fa-folder'},{name:'Charts',icon:'fas fa-fw fa-chart-area'},{name:'Tables',icon:'fas fa-fw fa-table'}]
    return(
        actions.map(action => {
            return(
            <li className="nav-item">
				<a className="nav-link" href="/">
					<i className={action.icon}></i>
					<span>{action.name}</span>
				</a>
		    </li>
            )
        })
    )
}
export default NavItemAc