(window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])});
heap.load("368830506", {
  rewrite: function(props) {{
	if (props.pageview_properties.query && props.pageview_properties.query.indexOf('email') != -1) {
			props.pageview_properties.query = "REDACTED_QUERY";
	}
	if (props.session_properties.query && props.session_properties.query.indexOf('email') != -1) {
		props.session_properties.query = "REDACTED_QUERY";
		}
	if (props.event_properties.query && props.event_properties.query.indexOf('email') != -1) {
		props.event_properties.query = "REDACTED_QUERY";
		}}
	return props;
  }
});