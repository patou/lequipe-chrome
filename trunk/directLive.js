			function displayDirect(item, popupDisplay) {
				html = '<div><div class="liveHead '+item['sport']+'"> <a href="'+item['lien']+'" target=_blank" > Live '+item['sport']+': '+item['competition']+' '+item['journee'];
				if (popupDisplay) {
					html += '<br/> '+ displayDateTime(item);
				}
				html += '</a></div>';
			//function displayDirect(item) {
				//html = '<div><div class="liveHead '+item['sport']+'">Live '+item['sport']+': '+item['competition']+' '+item['journee']+'<br/> le '+item['date']+' à '+item['heure']+'</a></div>'
				html += '<div id="match" class="score"><div class="board">';
				switch(item['sport']) {
					case "FOOT":									
						html += loadDirectFoot(item, popupDisplay); 	         
						break;
					case "TENNIS":									
						html += loadDirectTennis(item, popupDisplay);             
						break;
					case "BASKET":									
						html += loadDirectBasket(item, popupDisplay);           
						break;
					default: 
						html += '<div class="scx"> ';
						//  <div class="sc1">                    0                    </div>
						html += '<div class="statut">'+afficheStatut (item['statut']);
						//html += '<br/>'+item['temps'];
						html += '</div>'; 
						//  <div class="sc2">                    0                    </div>
						html += '</div>'; 
						break;
				}
				html += '</div> </div>';
				html += '<div class="clear"></div></div>';
				return html;
			}
			
			function displayDateTime(item) {
				return 'le '+item['date']+' à '+item['heure'];
			}
			
			function afficheStatut (statut)
			{
				switch(statut) {
					case "T":
					    return 'Terminé.';
						break;
					case "DM":
					    return '1e Mi-temps';
						break;
					case "RM":
					    return '2e Mi-temps';
						break;
					case "M":
					    return 'Mi-temps';
						break;
					case "V":
					    return 'A venir';
						break;
					case "E":
					    return 'En cours';
						break;
					default: 
						return '';
				}
			}
			
			
			function loadDirectFoot(item, popupDisplay) {
			
				if (!popupDisplay) {
					html += '<div class="statut">';
					html += item['temps'] + " - ";
					html += afficheStatut (item['statut']);
					html += '</div>'; 
				}
				 html =  '<div class="logo1"> <a href="http://www.lequipe.fr/Football/FootballFicheClub'+item['id1']+'.html" target="_blank" class="eq1">';
				html += '<img src="http://img.lequipe.fr/Football/logos/FootballLogo'+item['id1']+'_s60.gif" />';
				html += '<br/>'+item['equipe_1']+'</a></div>';
				
				var score = null;
				if (item['score']!= '-')
				{
					score = item['score'].split('-');
				}
				
				html += '<div class="scx"> ';
				if (score != null)
				{
					html += '<div class="sc1">'+score[0]+'</div>';
				}
				if (popupDisplay) {
					html += '<div class="statut">';
					html += afficheStatut (item['statut']);
					html += '</div>'; 
				}
				if (score != null)
				{
					html += '<div class="sc2">'+score[1]+'</div>';
				}
				html += '</div>';
				
				html +=  '<div class="logo2"> <a href="http://www.lequipe.fr/Football/FootballFicheClub'+item['id2']+'.html" target="_blank" class="eq2">';
				html += '<img src="http://img.lequipe.fr/Football/logos/FootballLogo'+item['id2']+'_s60.gif" />';
				html += '<br/>'+item['equipe_2']+'</a></div>';
				
				return html;
				
			}
			
			
			/**
			 * 
			 * <div class="logo1">
                    <img src="http://www.lequipe.fr/Basket/logos/BasketLogo12_s60.gif" /><br/>Limoge
                </div>
			 * @param {Object} item
			 */
			
			function loadDirectBasket(item, popupDisplay) {
				 html =  '<div class="logo1"> ';
				html += '<img src="http://www.lequipe.fr/Basket/logos/BasketLogo'+item['id1']+'_s60.gif" />';
				html += '<br/>'+item['equipe_1']+'</div>';
				
				var score = null;
				if (item['score']!= '-')
				{
					score = item['score'].split('-');
				}
				
				html += '<div class="scx"> ';
				if (score != null)
				{
					html += '<div class="sc1">'+score[0]+'</div>';
				}
				
				html += '<div class="statut">';
				if (!popupDisplay) {
					html += afficheStatut (item['statut']);
				}
				html += '</div>'; 
				if (score != null)
				{
					html += '<div class="sc2">'+score[1]+'</div>';
				}
				html += '</div>';
				
				html +=  '<div class="logo2"> ';
				html += '<img src="http://www.lequipe.fr/Basket/logos/BasketLogo'+item['id2']+'_s60.gif" />';
				html += '<br/>'+item['equipe_2']+'</div>';
				
				return html;
				
			}
			
			
			function loadDirectTennis(item, popupDisplay) {
				
				
				html =  '<div class="logo1"> <a href="http://www.lequipe.fr/Tennis/TFJM_'+item['id1']+'.html" target="_blank" class="eq1">';
				html += '<img src="http://img.lequipe.fr/Tennis/photos/TennisImage'+item['id1']+'.jpg" />';
				html += '<br/>'+item['equipe_1']+'</a></div>';
				
				
				
				html += '<div class="scx"> ';
				//  <div class="sc1">                    0                    </div>
				html += '<div class="statutTennis">';
				
				html += item['temps']+'</div>';
					
					if (item['score'] && item['score']!= '-')
					{
						var score = item['score'].split(' ');
						html += '<table class="tennis_table">';
						for (var i = 0; i < score.length; i++){
							score2 = score[i].split('-');
							if (score2 && score2.length > 1)
							html += '<tr><td>'+score2[0]+'</td><td>'+score2[1]+'</td></tr>';
						};
						html += '</table>';
					}
				
				
				//  <div class="sc2">                    0                    </div>
				html += '</div>';
				
				html +=  '<div class="logo2"> <a href="http://www.lequipe.fr/Tennis/TFJM_'+item['id2']+'.html" target="_blank" class="eq2">';
				html += '<img src="http://img.lequipe.fr/Tennis/photos/TennisImage'+item['id2']+'.jpg" />';
				html += '<br/>'+item['equipe_2']+'</a></div>';
				
				return html;
				
			}
