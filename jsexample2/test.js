function twoDigitStr(n) {
	return n < 10 ? '0' + n : n;
}

Date.prototype.toDateString = function() {
	var year = this.getFullYear();
	var month = twoDigitStr(this.getMonth()+1);
	var date = twoDigitStr(this.getDate());
	return `${year}-${month}-${date}`;
}

Date.prototype.toTimeString = function() {
	var hh = twoDigitStr(this.getHours());
	var mm = twoDigitStr(this.getMinutes());
	var ss = twoDigitStr(this.getSeconds());
	
	return `${hh}:${mm}:${ss}`;
}

Date.prototype.toDateTimeString = function() {
	return `${this.toDateString()} ${this.toTimeString()}`;
}

var now = new Date();
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toDateTimeString());



$.ajax({
	url : 'book_proxy.php',
	dataType : 'json',
	type : 'POST',
	data : {
		'query' : query
	},
	success : function(result) {
		$('#result').html('');
		if (result['channel']['display'] > 0) {
			$('.__oldlist').remove();
			for ( var i in result['channel']['item']) {
				var item = result['channel']['item'][i];
				$html = template('__template', item);
				$html.addClass('__oldlist');
				$('#list').append($html);
				$('.__oldlist').show();
			}

		} else {
			$('#result').html('');
			$('#result').append("데이터가 없거나 정상적으로 로딩 되지 않았습니다.");
		}
	}
});



//사용자가 발급받은 오픈 API
var key = "fm3gDdYTbkiYYWMCRCLv"; 
//오픈 API 호출 URL
var searchUrl = "http://openapi.naver.com/search"; 
private target = "image";

        /**
		 * API 결과를 받아오기 위하여 오픈 API 서버에 Request를 하고 결과를 XML Object로 반환하는 메서드
		 * 
		 * @return object
		 */
        private function query($query)
        {
                $url = sprintf("%s?query=%s&target=%s&key=%s", $this->searchUrl, $query, $this->target, $this->key);
                $data =file_get_contents($url);
                $xml = simplexml_load_string($data);
                
                return $xml;
        }

        /**
		 * API의 결과를 Json으로 encode하려 반환하는 메서드 XML을 직접 parsing하지 않고 json으로 변환하여
		 * 반환한다.
		 */
        public function getBookSearch($query)
        {       $xml = $this->query($query);
                $result = json_encode($xml);

                return $result; 
        }
} 
