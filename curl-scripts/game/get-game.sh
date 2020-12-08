curl "https://tic-tac-toe-api-production.herokuapp.com/games/${ID}" \
--include \
--request GET \
--header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
