curl "https://tic-tac-toe-api-production.herokuapp.com/games${ID}" \
--include \
--request PATCH \
--header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
