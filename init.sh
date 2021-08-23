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

## こんにちは
- a
- a
- ra
-
### hello !!
## こんにちは1
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
### hello !!
- a
- a
- ra
## こんにちは7
### hello !!
- a
- a
- ra
## こんにちは8
### hello !!
- a
- a
- ra
## こんにちは9
### hello !!
- a
- a
- ra
## こんにちは10
### hello !!
- a
- a
- ra
## こんにちは11
### hello !!
- a
- a
- ra
## こんにちは12
### hello !!
- a
- a
- ra
## こんにちは13
### hello !!
- a
- a
- ra
## こんにちは14
### hello !!
- a
- a
- ra
EOF
done
