function wrapHtml(tag, attrs, item){
	var arr = [];
	for(var a in attrs){
		arr.push(`${a} = "${attrs[a]}"`);
	}
	var attrstr = arr.join(' ');
	return `<$(tag) ${attrstr}>${item}</${tag}>`;
}

var items = range(totalPage, 1).map(toPageItem).join('\n');

var pagination = wrapHtml('ul', {'class' : 'pagination'}, items);
console.log(pagination);