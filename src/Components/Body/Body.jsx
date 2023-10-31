import React from 'react';
import {Container, Text, Box3, Box3a, Box3b, Box3c,Box4, Box5,Box5a,Box6, Box7,Box8} from '../Styled-List/Styled-Body.jsx'

const BodyPage = () =>{
    const data = 
  /*0-3 */  [{firstName: 'James' },{lastName:"Harden"},{numberAndTeam:"13 G / HOU"},{points: 28.0},
 /*4-7 */    {firstName: 'DeAndre' },{lastName:"Jordan"},{numberAndTeam:"6 C / LAC"},{Rebounds: 14.0},
 /*8-11 */    {firstName: 'Russel' },{lastName:"Westbrook"},{numberAndTeam:"0 G / OKC"},{Assists: 10.0},
  /*12-15 */   {firstName: 'Russel' },{lastName:"Westbrook"},{numberAndTeam:"0 G / OKC"},{Steals: 2.4},
   /*16-19 */  {firstName: 'Kevin' },{lastName:"Durant"},{numberAndTeam:"35 F / OKC"},{points: 27.8},
  /*20-23 */   {firstName: "Dwight" },{lastName:"Howard"},{numberAndTeam:"12 C / HOU"},{Rebounds: 12.0},
   /*24-27 */  {firstName: "John" },{lastName:"Wall"},{numberAndTeam:"2 G / WAS"},{Assists: 9.9},
 /*28-31 */    {firstName: "Ricky" },{lastName:"Rubio"},{numberAndTeam:"9 G / MIN"},{Steals: 2.2},
 /*32-35 */  {firstName: 'DeMarcus' },{lastName:"Cousins"},{numberAndTeam:"15 C-F / SAC"},{points: 26.8},
 /*36-39 */{firstName: 'DeMarcus' },{lastName:"Cousins"},{numberAndTeam:"15 C-F / SAC"},{Rebounds: 11.1},
 /*40-43 */{firstName: "Chris" },{lastName:"Paul"},{numberAndTeam:"3 G / LAC"},{Assists: 9.4},
 /*44-47 */{firstName: "Chris" },{lastName:"Paul"},{numberAndTeam:"3 G / LAC"},{Steals: 2.2},
  /*48-51*/{firstName: 'LeBron' },{lastName:"James"},{numberAndTeam:"23 F / CLE"},{points: 25.0},
  /*52-55*/{firstName: 'Hassan' },{lastName:"Whiteside"},{numberAndTeam:"21 C / MIA"},{Rebounds: 11.0},
   /*56-59 */{firstName: "Ricky" },{lastName:"Rubio"},{numberAndTeam:"9 G / MIN"},{Assists: 8.6},
 /*60-63 */{firstName: "Stephen" },{lastName:"Curry"},{numberAndTeam:"30 G / GSW"},{Steals: 2.1},
    ]
    const counter = 1

    return(
      
    <div>
        
     <Box3 /> 
     <Box3a />
     <Box3b />
     <Box3c />
     <Container>
     <Box7><Text>{counter + 1}</Text></Box7>
     <Box5/>
     <Box6><p className = "playerOne">{data[0].firstName}<br />{data[1].lastName}<br/><br/></p><p className="numberLocation">{data[2].numberAndTeam}<br/></p></Box6>
     <Box8><p className = "Number">{data[3].points}</p></Box8>
     <Box7><Text>{counter + 1}</Text></Box7>
     <Box5/>
     <Box6><p className = "playerOne">{data[4].firstName}<br />{data[5].lastName}<br/><br/></p><p className="numberLocation">{data[6].numberAndTeam}<br/></p></Box6>
     <Box8><p className = "Number">{data[7].Rebounds}</p></Box8>
     <Box7><Text>{counter + 1}</Text></Box7>
     <Box5/>
     <Box6><p className = "playerOne">{data[8].firstName}<br />{data[9].lastName}<br/><br/></p><p className="numberLocation">{data[10].numberAndTeam}<br/></p></Box6>
     <Box8><p className = "Number">{data[11].Assists}</p></Box8>
     <Box7><Text>{counter + 1}</Text></Box7>
     <Box5/>
     <Box6><p className = "playerOne">{data[12].firstName}<br />{data[13].lastName}<br/><br/></p><p className="numberLocation">{data[14].numberAndTeam}<br/></p></Box6>
     <Box8><p className = "Number">{data[15].Steals}</p></Box8>

     </Container>
     <Container>
     <Box7><Text>{counter + 2}</Text></Box7>
     <Box5a/>
     <Box6><p className = "playerOne">{data[16].firstName}<br />{data[17].lastName}<br/><br/></p><p className="numberLocation">{data[18].numberAndTeam}<br/></p></Box6>
     <Box8><p className = "Number">{data[19].points}</p></Box8>
     <Box7><Text>{counter + 2}</Text></Box7>
     <Box5 />
     <Box6><p className = "playerOne">{data[20].firstName}<br />{data[21].lastName}<br/><br/></p><p className="numberLocation">{data[22].numberAndTeam}<br/></p></Box6>
     <Box8><p className = "Number">{data[23].Rebounds}</p></Box8>
     <Box7><Text>{counter + 2}</Text></Box7>
     <Box5/>
     <Box6><p className = "playerOne">{data[24].firstName}<br />{data[25].lastName}<br/><br/></p><p className="numberLocation">{data[26].numberAndTeam}<br/></p></Box6>
     <Box8><p className = "Number">{data[27].Assists}</p></Box8>
     <Box7><Text>{counter + 2}</Text></Box7>
     <Box5/>
     <Box6><p className = "playerOne">{data[28].firstName}<br />{data[29].lastName}<br/><br/></p><p className="numberLocation">{data[30].numberAndTeam}<br/></p></Box6>
     <Box8><p className = "Number">{data[31].Steals}</p></Box8>
     </Container>
     <Container>
     <Box7><Text>{counter + 3}</Text></Box7>
     <Box5></Box5>
     <Box6><p className = "playerOne">{data[32].firstName}<br />{data[33].lastName}<br/><br/></p><p className="numberLocation">{data[34].numberAndTeam}<br/></p></Box6>
     <Box8><p className = "Number">{data[35].points}</p></Box8>
     <Box7><Text>{counter + 3}</Text></Box7>
     <Box5/>
     <Box6><p className = "playerOne">{data[36].firstName}<br />{data[37].lastName}<br/><br/></p><p className="numberLocation">{data[38].numberAndTeam}<br/></p></Box6>
     <Box8><p className = "Number">{data[39].Rebounds}</p></Box8>
     <Box7><Text>{counter + 3}</Text></Box7>
     <Box5/>
     <Box6><p className = "playerOne">{data[40].firstName}<br />{data[41].lastName}<br/><br/></p><p className="numberLocation">{data[42].numberAndTeam}<br/></p></Box6>
     <Box8><p className = "Number">{data[43].Assists}</p></Box8>
     <Box7><Text>{counter + 3}</Text></Box7>
     <Box5/>
     <Box6><p className = "playerOne">{data[44].firstName}<br />{data[45].lastName}<br/><br/></p><p className="numberLocation">{data[46].numberAndTeam}<br/></p></Box6>
     <Box8><p className = "Number">{data[47].Steals}</p></Box8>

     </Container>
     <Container>
     <Box7><Text>{counter + 4}</Text></Box7>
     <Box5/>
     <Box6><p className = "playerOne">{data[48].firstName}<br />{data[49].lastName}<br/><br/></p><p className="numberLocation">{data[50].numberAndTeam}<br/></p></Box6>
     <Box8><p className = "Number">{data[51].points}</p></Box8>
     <Box7><Text>{counter + 4}</Text></Box7>
     <Box5/>
     <Box6><p className = "playerOne">{data[52].firstName}<br />{data[53].lastName}<br/><br/></p><p className="numberLocation">{data[54].numberAndTeam}<br/></p></Box6>
     <Box8><p className = "Number">{data[55].Rebounds}</p></Box8>
     <Box7><Text>{counter + 4}</Text></Box7>
     <Box5/>
     <Box6><p className = "playerOne">{data[56].firstName}<br />{data[57].lastName}<br/><br/></p><p className="numberLocation">{data[58].numberAndTeam}<br/></p></Box6>
     <Box8><p className = "Number">{data[59].Assists}</p></Box8>
     <Box7><Text>{counter + 4}</Text></Box7>
     <Box5/>
     <Box6><p className = "playerOne">{data[60].firstName}<br />{data[61].lastName}<br/><br/></p><p className="numberLocation">{data[62].numberAndTeam}<br/></p></Box6>
     <Box8><p className = "Number">{data[63].Steals}</p></Box8>
     </Container>
    
     </div>
    )
    }
export default BodyPage