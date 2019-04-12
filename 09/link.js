var links = {
		'네이버' : 'https://www.naver.com',
		'다음' : 'https://www.daum.net'
}

var str = `네이버와 다음은 한국의 대표적인 포털사이트입니다.`;
console.log(str);

var result = str.replace(/(네이버|다음)/g, function(site){
	return site.link(links[site]);
});
console.log(result);

var result2 = str.replace(/(네이버|다음)/g, function(site){
	return `<a href="${links[site]}" target="_blank">${site}</a>`;
});
console.log(result2);