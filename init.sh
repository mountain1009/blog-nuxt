rm -rf content/articles
mkdir content/articles

max=84
for ((i=1; i < $max; i++)); do
    cat <<EOF >> content/articles/$i.md
---
title: Introduction-$i
description: Learn how to use @nuxt/content.
image: $i.jpg
---

# Introduction-$i

<article-image name="$i.jpg" alt="サンプル画像"></article-image>

## xxxxxxxxxxxxxxxxxxな話
- a
- a
- ra
-
### hello !!

aaaa
test


aaaaaaaaaaaa
aaaass

## xxxxxxxxxxxxxxxxxxな話
### hello !!
- a
- a
- ra
## こんにちは3
### hello !!
- a
- a
- ra
## こんにちは4
### hello !!
- a
- a
- ra
## こんにちは5
### hello !!
- a
- a
- ra
## こんにちは6
EOF
done
