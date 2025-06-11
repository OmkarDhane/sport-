import { Link } from "react-router-dom"

export default function(){
    
    return(
        <div>
        <h2>Welcome To Sport Acedamy System</h2>
         <Link to='/Games'><button>Games</button></Link>
         <Link to='/Coach'><button>Coach</button></Link>
         <Link to='/Player'><button>Player</button></Link>
         <Link to='/Reportgame'><button>Report games</button></Link>
         <Link to='/Reportcoachs'><button>Report coachs</button></Link>
         <Link to='/Reportplayers'><button>Report players</button></Link>
        </div>
    )

    }

