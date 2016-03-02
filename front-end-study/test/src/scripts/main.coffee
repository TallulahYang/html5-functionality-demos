for i in [0..5]
    console.log "Hello #{i}"

stdin = process.openStdin()
stdin.setEncoding 'utf8'

stdin.on 'data', (input) -> 
    name = input.trim() 
    process.exit() if name == 'exit' 
    console.log "Hello #{name}"
    console.log "Enter another name or 'exit' to exit"
console.log 'Enter your name'

isOdd = (n) -> n % 2 == 1

odds.reduce (a,b) -> a + b

gcd = (a,b) -> if (b==0) then a else gcd(b, a % b)
$("#button").click -> 
    a = $("#a").val() 
    b = $("#b").val() 
    $("#c").html gcd(a,b)