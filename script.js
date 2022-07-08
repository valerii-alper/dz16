let marvelHeroes = [
	{
		name: "Thor"
	},
	{
		name: "Spider Man"
	}
];

let dcHeroes = [
	{
		name: "Superman"
	},
	{
		name: "Batman"
	},
	{
		name: "Deadpool"
	}
];

Array.prototype.heroesRender = function f1(x,y) {
    y.forEach(
        function(item, i, arr) {
        console.log(item.name)
		document.write(`<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Icon</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>${item.name}</td>
						<td>
							<img src="images/${x}/${item.name.toLowerCase().replaceAll(` `, ``)}.svg">
						</td>
					</tr>
				</tbody>
					</table>
					`)
        }
        
        )
}

dcHeroes.heroesRender('dc',dcHeroes);
marvelHeroes.heroesRender('marvel', marvelHeroes);
    

