---
id: cancel-quote
title: Cancel Quote
---

### Get payment transaction 
This endpoint cancels a quote.

### Request
Method: GET
Paramaters: id for the quote id

```json
  {{URL}}/accounts/cancelQuote/{{id}}
```

#### Response raw (json)
```json
 { 
    "status":200,
    "message":"Quote cancelled"
 }
```
```json
{
    "status": 203,
    "message": "Failed to cancel a quote"
}
```


