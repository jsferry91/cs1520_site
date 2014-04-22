/* Changes created by Jordan Ferry on 4/22/14
   Description of Changes:  Added variables to the HTML5 local storage
   to keep track of which sections of the web page were open during the
   last visit to the site. This way if a user clicks a link from the 
   schedule section to look at some example code, when they navigate back,
   the schedule section will still be left open so that the user can
   immediately click other example code links. This was the only annoyance
   that I had with the course website this semester, so I wanted to add a
   fix for it.
*/
var items = [
  "announcements",
  "schedule",
  "assignments",
  "policies",
  "other"
];

function toggleItem(itemName)
{
	var item = document.getElementById(itemName);
	var itemtoggle = document.getElementById(itemName.concat("toggle"));
	if(item.style.display == "none")
	{
		item.style.display = "";
		itemtoggle.innerHTML = "&#8722";
		if (typeof(Storage) !== "undefined") // check that local storage exists
		{
			localStorage[itemName] = 1; // set the variable to 1
		}
	}
	else
	{
		item.style.display = "none";
		itemtoggle.innerHTML = "+";
		if (typeof(Storage) !== "undefined") // check that local storage exists
		{
			localStorage[itemName] = 0; // set the variable to 0
		}
	}
}


function hideSelected() // changed the name to hideSelected()
{
	for(var i in items)
	{
		if(items.hasOwnProperty(i))
		{
			var item = document.getElementById(items[i]);
			if (typeof(Storage) !== "undefined") // check that local storage exists
			{
				if (localStorage[items[i]] == 0) // if variable set to 0, close that section
				{
					item.style.display = "none";
				}
				else // else update the toggle to a minus sign
				{
					var itemtoggle = document.getElementById(items[i].concat("toggle"));
					itemtoggle.innerHTML = "&#8722";
				}
			}
			else // else close all sections like before
			{
				item.style.display = "none";
			}
		}
	}
}
