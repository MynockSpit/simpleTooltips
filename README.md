# simpleTooltips
This is a very simple tooltip script.

There are three steps to use this. 

### Step 1

Set up your HTML so that the tooltip is the immediate child of the element you want to have a tooltip. I always recommend using a ```<span>``` element for your tooltip. The script will always display tooltips as blocks, and spans can fit inside elements like ```<p>```'s that wouldn't otherwise let a block-level element inside.

Examples:
```HTML
<div>
  I want to have a tooltip when you hover over this div.
  <span class="tooltip">This is my tooltip, yay!</span>
</div>

<p>
  I want to have a tooltip when you hover over the word 
    <span>'costal'
      <span>This is my second tooltip, yay!</span>
    </span> 
  in this sentence.
</p>
```

### Step 2

Create the class you want to use for the tooltip.

Example:

```CSS
.tip {
  color: rgb(50,50,50);
  font-weight: light;
  font-family: Sansation, Arial, Helvetica, sans-serif;
  background: rgb(250,250,250);
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid rgb(238,238,238);
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
```

### Step 3

Call the include the script in your code and then run the function ```mouseoverTooltips(".classNameHere");``` somewhere in your JS. This initates the function and tells it that .classNameHere is the tooltip class.

Example:

```JS
<script type="text/javascript" src="tooltips.js"></script>
<script type="text/javascript"> mouseoverTooltips(".tip"); </script>
```

That's it, you're done!
