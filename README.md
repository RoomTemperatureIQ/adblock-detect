# Browser Adblock Detection
A script I've wrote in order to detect if adblock is active on a browser :-)

# Usage:
To use this repo, simply pullt the repo into your project and insert the following javascript in your page:
```javascript
<script type = "text/javascript">
    var adblockCallback = function(isBlocked){
        if(isBlocked){
            alert("You have adblock enabled");
        } else {
            alert("Adblock is off");
        }
    };
</script>
<script type="text/javascript" src = "./ab-detect/js/test.js" class = "adBlockTest"></script><div id = "ab-detect"></div>
```

**Note: remember to edit the `adblockCallback` to do what you need once the detection is finished!**
