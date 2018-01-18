<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
     <base href="/">
     <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
     <link href="<c:url value='/static/lib/bootstrap/css/bootstrap.css' />" rel="stylesheet"></link>
     <link href="<c:url value='/static/css/index.css' />" rel="stylesheet"></link>
     <title>DashBoard</title>
</head>
<body>

<div class="container" ui-view=""></div>

	<script data-main="<c:url value='/static/app/main' />"
		src="<c:url value='/static/lib/requirejs/require.js' />"></script>

</body>
</html>
