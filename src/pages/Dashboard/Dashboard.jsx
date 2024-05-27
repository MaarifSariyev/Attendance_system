import React from 'react'
import './Dashboard.css'
import Navbar from '../../components/Navbar'
import DashboardDiagram from '../../components/DashboardDiagram'
import ChartRadar from '../../components/ChartRadar'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='link-bar'>
        <span>Dashboard</span>
        <p>Home/ <span>Dashboard</span> </p>
      </div>
      <div className='dashboard-elements'>
          <div className='present'>

            <div className='present-datas'>
                <div>
                    <span style={{width:"18px"}}>Present</span> | Today
                </div>

                <div className='kruq'>
                  <div className='kruqyoxdaire'>

                  </div>
                  <div className='data-numbers'>
                        <span>145</span>
                        <div className='p'>

                        <p style={{color:"#012970" ,fontWeight:"700"}}>12%</p> increase
                        </div>
                  </div>
                </div>
            </div>
            <div className='present-datas'>
                <div>
                    <span style={{width:"18px"}}>Absense</span> | Today
                </div>

                <div className='kruq'>
                  <div className='kruqyoxdaire'>

                  </div>
                  <div className='data-numbers'>
                        <span>145</span>
                        <div className='p'>

                        <p style={{color:"#012970" ,fontWeight:"700"}}>12%</p> increase
                        </div>
                  </div>
                </div>
            </div>
            <div className='present-datas'>
                <div>
                    <span style={{width:"18px"}}>Attendance</span> | This Month
                </div>

                <div className='kruq'>
                  <div className='kruqyoxdaire'>

                  </div>
                  <div className='data-numbers'>
                        <span>145</span>
                        <div className='p'>

                        <p style={{color:"#012970" ,fontWeight:"700"}}>12%</p> increase
                        </div>
                  </div>
                </div>
            </div>


           
          </div>
          <DashboardDiagram/>


          <div className='report'>
            <table>
             <tr>
                <th> Recent Activities <span>| Today</span></th>
                
              </tr>
              <tr>
                <td style={{width:'64px', height:'62px',color:'#888888'}}>32min</td>
                <span className='line'></span>
                <td>New teacher created</td>
              </tr>
              <tr>
                <td style={{width:'64px', height:'62px',color:'#888888'}}>56min</td>
                <span className='line'></span>
                <td>Java attendance taken</td>
              </tr>
              <tr>
                <td style={{width:'64px', height:'62px',color:'#888888'}}>2hrs</td>
                <span className='line'></span>
                <td>Absence application </td>
              </tr>
            </table>             
          </div>
          

          <ChartRadar/>
      </div>
    </div>
  )
}

export default Dashboard