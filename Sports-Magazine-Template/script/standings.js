const tableSelector = document.getElementById("tableSelector");
const tableContainer = document.getElementById("league--table");

        tableSelector.addEventListener("change", () => {
            const selectedValue = tableSelector.value;
            tableContainer.innerHTML = getTableContent(selectedValue);
        });

        const getTableContent = (league) => {
            const tables = {
                premier: `
                <table>
                <tr>
                    <th>Position</th>
                    <th>Team</th>
                    <th>MP</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>GF</th>
                    <th>GA</th>
                    <th>GD</th>
                    <th>Points</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td> <img src="extra-images/ranking-widget-flag-1.png" alt=""> <div class="ranking-logo"><span>L.A Pirates</span> <small>Bebop Institute</small> </div></td>
                    <td>20</td>
                    <td>15</td>
                    <td>3</td>
                    <td>2</td>
                    <td>12</td>
                    <td>45</td>
                    <td>5</td>
                    <td>48</td>
                </tr>
                <tr>
                   <td>2</td>
                   <td><img src="extra-images/ranking-widget-flag-2.png" alt=""> <div class="ranking-logo"><span>Ocean Kings</span> <small>Icarus College</small> </div></td>
                   <td>20</td>
                   <td>14</td>
                   <td>3</td>
                   <td>2</td>
                   <td>10</td>
                   <td>35</td>
                   <td>3</td>
                   <td>45</td>
               </tr>
               <tr>
                   <td>3</td>
                   <td> <img src="extra-images/ranking-widget-flag-3.png" alt=""> <div class="ranking-logo"><span>Red Wings</span> <small>Marine College</small> </div></td>
                   <td>20</td>
                   <td>15</td>
                   <td>3</td>
                   <td>2</td>
                   <td>12</td>
                   <td>45</td>
                   <td>5</td>
                   <td>48</td>
               </tr>
               <tr>
                   <td>4</td>
                   <td><img src="extra-images/ranking-widget-flag-4.png" alt=""> <div class="ranking-logo"><span>Lucky Clovers</span> <small>Elric Bros School</small> </div></td>
                   <td>20</td>
                   <td>15</td>
                   <td>3</td>
                   <td>2</td>
                   <td>12</td>
                   <td>45</td>
                   <td>5</td>
                   <td>48</td>
               </tr>
               <tr>
                   <td>5</td>
                   <td> <img src="extra-images/ranking-widget-flag-5.png" alt=""> <div class="ranking-logo"><span>Draconians</span> <small>Atlantic School</small> </div></td>
                   <td>20</td>
                   <td>15</td>
                   <td>3</td>
                   <td>2</td>
                   <td>12</td>
                   <td>45</td>
                   <td>5</td>
                   <td>48</td>
               </tr>
               <tr>
                   <td>6</td>
                   <td> <img src="extra-images/ranking-widget-flag-6.png" alt=""> <div class="ranking-logo"><span>Bloody Wave</span> <small>Marine College</small> </div></td>
                   <td>20</td>
                   <td>15</td>
                   <td>3</td>
                   <td>2</td>
                   <td>12</td>
                   <td>45</td>
                   <td>5</td>
                   <td>48</td>
               </tr>
               <tr>
                   <td>7</td>
                   <td><img src="extra-images/ranking-widget-flag-7.png" alt=""> <div class="ranking-logo"><span>Ocean Kings</span> <small>St. Patrick’s Institute</small> </div> </td>
                   <td>20</td>
                   <td>15</td>
                   <td>3</td>
                   <td>2</td>
                   <td>12</td>
                   <td>45</td>
                   <td>5</td>
                   <td>48</td>
               </tr>
               
                <!-- Add more rows for other teams -->
            </table>
                `,
                seriea: `
                <table>
                <tr>
                    <th>Position</th>
                    <th>Team</th>
                    <th>MP</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>GF</th>
                    <th>GA</th>
                    <th>GD</th>
                    <th>Points</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td> <img src="extra-images/ranking-widget-flag-1.png" alt=""> <div class="ranking-logo"><span>L.A Pirates</span> <small>Bebop Institute</small> </div></td>
                    <td>20</td>
                    <td>15</td>
                    <td>3</td>
                    <td>2</td>
                    <td>12</td>
                    <td>45</td>
                    <td>5</td>
                    <td>48</td>
                </tr>
                <tr>
                   <td>2</td>
                   <td><img src="extra-images/ranking-widget-flag-2.png" alt=""> <div class="ranking-logo"><span>Ocean Kings</span> <small>Icarus College</small> </div></td>
                   <td>20</td>
                   <td>14</td>
                   <td>3</td>
                   <td>2</td>
                   <td>10</td>
                   <td>35</td>
                   <td>3</td>
                   <td>39</td>
               </tr>
               <tr>
                   <td>3</td>
                   <td> <img src="extra-images/ranking-widget-flag-3.png" alt=""> <div class="ranking-logo"><span>Red Wings</span> <small>Marine College</small> </div></td>
                   <td>20</td>
                   <td>15</td>
                   <td>3</td>
                   <td>2</td>
                   <td>12</td>
                   <td>45</td>
                   <td>5</td>
                   <td>38</td>
               </tr>
               <tr>
                   <td>4</td>
                   <td><img src="extra-images/ranking-widget-flag-4.png" alt=""> <div class="ranking-logo"><span>Lucky Clovers</span> <small>Elric Bros School</small> </div></td>
                   <td>20</td>
                   <td>15</td>
                   <td>3</td>
                   <td>2</td>
                   <td>12</td>
                   <td>45</td>
                   <td>5</td>
                   <td>35</td>
               </tr>
               <tr>
                   <td>5</td>
                   <td> <img src="extra-images/ranking-widget-flag-5.png" alt=""> <div class="ranking-logo"><span>Draconians</span> <small>Atlantic School</small> </div></td>
                   <td>20</td>
                   <td>15</td>
                   <td>3</td>
                   <td>2</td>
                   <td>12</td>
                   <td>45</td>
                   <td>5</td>
                   <td>32</td>
               </tr>
               <tr>
                   <td>6</td>
                   <td> <img src="extra-images/ranking-widget-flag-6.png" alt=""> <div class="ranking-logo"><span>Bloody Wave</span> <small>Marine College</small> </div></td>
                   <td>20</td>
                   <td>15</td>
                   <td>3</td>
                   <td>2</td>
                   <td>12</td>
                   <td>45</td>
                   <td>5</td>
                   <td>32</td>
               </tr>
               <tr>
                   <td>7</td>
                   <td><img src="extra-images/ranking-widget-flag-7.png" alt=""> <div class="ranking-logo"><span>Ocean Kings</span> <small>St. Patrick’s Institute</small> </div> </td>
                   <td>20</td>
                   <td>15</td>
                   <td>3</td>
                   <td>2</td>
                   <td>12</td>
                   <td>45</td>
                   <td>5</td>
                   <td>30</td>
               </tr>
               
                <!-- Add more rows for other teams -->
            </table>
                `,
                bundesliga: `
                <table>
                <tr>
                    <th>Position</th>
                    <th>Team</th>
                    <th>MP</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>GF</th>
                    <th>GA</th>
                    <th>GD</th>
                    <th>Points</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td> <img src="extra-images/ranking-widget-flag-1.png" alt=""> <div class="ranking-logo"><span>L.A Pirates</span> <small>Bebop Institute</small> </div></td>
                    <td>20</td>
                    <td>15</td>
                    <td>3</td>
                    <td>2</td>
                    <td>12</td>
                    <td>45</td>
                    <td>5</td>
                    <td>48</td>
                </tr>
                <tr>
                   <td>2</td>
                   <td><img src="extra-images/ranking-widget-flag-2.png" alt=""> <div class="ranking-logo"><span>Ocean Kings</span> <small>Icarus College</small> </div></td>
                   <td>20</td>
                   <td>14</td>
                   <td>3</td>
                   <td>2</td>
                   <td>10</td>
                   <td>35</td>
                   <td>3</td>
                   <td>39</td>
               </tr>
               <tr>
                   <td>3</td>
                   <td> <img src="extra-images/ranking-widget-flag-3.png" alt=""> <div class="ranking-logo"><span>Red Wings</span> <small>Marine College</small> </div></td>
                   <td>20</td>
                   <td>15</td>
                   <td>3</td>
                   <td>2</td>
                   <td>12</td>
                   <td>45</td>
                   <td>5</td>
                   <td>38</td>
               </tr>
               <tr>
                   <td>4</td>
                   <td><img src="extra-images/ranking-widget-flag-4.png" alt=""> <div class="ranking-logo"><span>Lucky Clovers</span> <small>Elric Bros School</small> </div></td>
                   <td>20</td>
                   <td>15</td>
                   <td>3</td>
                   <td>2</td>
                   <td>12</td>
                   <td>45</td>
                   <td>5</td>
                   <td>35</td>
               </tr>
               <tr>
                   <td>5</td>
                   <td> <img src="extra-images/ranking-widget-flag-5.png" alt=""> <div class="ranking-logo"><span>Draconians</span> <small>Atlantic School</small> </div></td>
                   <td>20</td>
                   <td>15</td>
                   <td>3</td>
                   <td>2</td>
                   <td>12</td>
                   <td>45</td>
                   <td>5</td>
                   <td>33</td>
               </tr>
               <tr>
                   <td>6</td>
                   <td> <img src="extra-images/ranking-widget-flag-6.png" alt=""> <div class="ranking-logo"><span>Bloody Wave</span> <small>Marine College</small> </div></td>
                   <td>20</td>
                   <td>15</td>
                   <td>3</td>
                   <td>2</td>
                   <td>12</td>
                   <td>45</td>
                   <td>5</td>
                   <td>26</td>
               </tr>
               <tr>
                   <td>7</td>
                   <td><img src="extra-images/ranking-widget-flag-7.png" alt=""> <div class="ranking-logo"><span>Ocean Kings</span> <small>St. Patrick’s Institute</small> </div> </td>
                   <td>20</td>
                   <td>15</td>
                   <td>3</td>
                   <td>2</td>
                   <td>12</td>
                   <td>45</td>
                   <td>5</td>
                   <td>20</td>
               </tr>
               
                <!-- Add more rows for other teams -->
            </table>
                `
            };

            return tables[league] || ""; // Return the selected league table, or empty string if not found
        };
    



