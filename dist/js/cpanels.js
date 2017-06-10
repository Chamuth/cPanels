function Observe(element) { var results = []; for (var i = 0; i < element.children.length; i++) { var current = element.children[i]; results.push(current);	results = results.concat(Observe(current));	} return results; }

function TogglePanel(element)
{
	if (element.classList.contains("cc-panel-closed-start"))
	{
		element.classList.remove("cc-panel-closed-start");
		element.classList.add("cc-panel-open");
	}
	else if (element.classList.contains("cc-panel-closed"))
	{
		element.classList.remove("cc-panel-closed");
		element.classList.add("cc-panel-open");
	}else{
		element.classList.add("cc-panel-closed");
		element.classList.remove("cc-panel-open");
	}
}

function Initialize(first = false)
{
	var elements = Observe(document);

	var leftCount = 0;
	var rightCount = 0;

	for (var i = 0; i < elements.length; i++) {
		var current = elements[i];

		if (current.dataset.container != null)
		{ 
			//Update the left / right
			var parent = current.parentElement;

			if (parent.classList.contains("cc-left") && parent.style.display != "none")
			{
				parent.style.left = ((250 * leftCount) + (10 * (leftCount + 1))).toString() + "px";
				leftCount++;
			}else if (parent.classList.contains("cc-right") && parent.style.display != "none")
			{
				parent.style.right = ((250 * rightCount) + (10 * (rightCount + 1))).toString() + "px";
				rightCount++;
			}

			if (parent.style.display != "none" && first){
				//Add toggling functionality
				current.addEventListener("click", function()
				{	
					TogglePanel(document.getElementById(this.dataset.container));
				});
			}

			var currentChildren = Observe(parent);

			for (var j = 0; j < currentChildren.length; j++) {
				var currentChild = currentChildren[j];

				if (currentChild.dataset.close == "panel")
				{
					//This is the object
					currentChild.addEventListener("click", function ()
					{
						this.parentElement.parentElement.style.display = "none";
						//Reinitialize
						Initialize();
					});
					break;
				}
			}
		}
	
	}
}

function EvaluateSize(all =false)
{
	var elements = Observe(document);
	var returner = 0;

	for (var i = 0; i < elements.length; i++) {
		var current = elements[i];

		if (current.dataset.container != null)
		{
			if (all){
				returner++;
				continue;
			}
			if (current.parentElement.style.display != "none")
				returner ++ ;
		}
	}

	return returner;
}

function panel(id, open = null)
{
	var element = document.getElementById(id);

	if (open == true)
	{
		if (element.classList.contains("cc-panel-closed-start"))
		{
			element.classList.remove("cc-panel-closed-start");
			element.classList.add("cc-panel-open");
		}
		else if (element.classList.contains("cc-panel-closed"))
		{
			element.classList.remove("cc-panel-closed");
			element.classList.add("cc-panel-open");
		}

		return true;
	}
	else if (open == false)
	{
		if (element.classList.contains("cc-panel-open"))
		{
			element.classList.remove("cc-panel-open");
			element.classList.add("cc-panel-closed");
		}
		return true;
	}else if (open == null)
	{
		TogglePanel(element);
		return true;
	}

	return false;
}

function UpdateView()
{
	var width = window.innerWidth;
	var size = ((250 * EvaluateSize(true)) + (10 * (EvaluateSize(true) + 1)));

	var elements = Observe(document);

	var leftParents = [];
	var rightParents = [];
	var parents = [];

	for (var i = 0; i < elements.length; i++) {
		var current = elements[i];

		if (current.dataset.container != null)
		{
			var parent = current.parentElement;

			if (parent.classList.contains("cc-right"))
				rightParents.push(parent);
			else
				leftParents.push(parent);
		}
	}

	leftParents = leftParents.reverse();
	rightParents = rightParents.reverse();
	parents = rightParents.concat(leftParents);

	if (width < size){
		while(width < size)
		{
			var element = parents.pop();
			element.style.display = "none";
			size  = ((250 * EvaluateSize()) + (10 * (EvaluateSize() + 1)));
		}
	}else{
		for (var i = 0; i < parents.length; i++) {
			var currentParent = parents[i];
			currentParent.style.display = "block";
		}
	}
	
	//Reinitialize
	Initialize();
}


// EVENT HANDLERS
window.addEventListener("resize", function()
{
	UpdateView();
});

window.addEventListener("load", function() 
{
	Initialize(true);	
	UpdateView();
})
