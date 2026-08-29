/*
  PyVault — i18n
  Dictionnaire de traductions Français / 日本語 pour le site docs.
  La langue est sauvegardée dans localStorage (clé "pyvault.lang"), défaut : fr.
*/

var I18N_LANG_KEY = "pyvault.lang";

var I18N = {

    "meta.title": {
        "fr": "PyVault — Gestionnaire de mots de passe local en Python",
        "ja": "PyVault — ローカルで動く Python 製パスワードマネージャー"
    },

    /* ---------- topbar ---------- */
    "nav.accueil": { "fr": "Accueil", "ja": "ホーム" },
    "nav.readme": { "fr": "README", "ja": "README" },
    "nav.test": { "fr": "Test", "ja": "テスト" },
    "nav.idees": { "fr": "Idées", "ja": "アイデア" },
    "nav.apropos": { "fr": "À propos", "ja": "概要" },

    /* ---------- hero ---------- */
    "hero.badge": {
        "fr": "<span class=\"dot\"></span> Projet en cours de développement &nbsp;·&nbsp; v0.2.0-dev",
        "ja": "<span class=\"dot\"></span> 開発中のプロジェクト &nbsp;·&nbsp; v0.2.0-dev"
    },
    "hero.title": {
        "fr": "Un gestionnaire de mots de passe qui tourne en local, écrit en Python.",
        "ja": "Python で書かれた、ローカルで動作するパスワードマネージャー。"
    },
    "hero.text": {
        "fr": "PyVault vient d'abord d'une envie toute simple : arrêter de me tromper\nsur les mêmes mots de passe partout. Au lieu de prendre un outil tout fait,\nje me suis dit que ce serait plus intéressant d'en construire un — et d'apprendre\nau passage comment marchent vraiment le chiffrement, les bases de données et tout le reste.",
        "ja": "PyVault は、いたってシンプルな思いから始まりました。同じパスワードをあちこちで使い回すのをやめたい。既製ツールを使う代わりに、自分で作るほうがもっと面白いと考えました。その過程で、暗号化やデータベース、その他の仕組みが実際にどう動くのかを学べます。"
    },
    "hero.btn_readme": { "fr": "Lire le README", "ja": "README を読む" },
    "hero.btn_ideas": { "fr": "Voir les idées", "ja": "アイデアを見る" },
    "hero.btn_github": { "fr": "Voir sur GitHub", "ja": "GitHub で見る" },

    /* ---------- features ---------- */
    "feat.title": { "fr": "Ce qu'il sait faire aujourd'hui", "ja": "現在できること" },
    "feat.intro": {
        "fr": "La base est là. Chaque fonction correspond à un vrai menu dans la CLI, donc tout ce qui est listé ici se teste en deux minutes.",
        "ja": "基本は揃っています。各機能は CLI の実際のメニューに対応しているため、ここに記載されているものはすべて数分で試せます。"
    },
    "card.1.title": { "fr": "🔑 Générer une clé", "ja": "🔑 鍵の生成" },
    "card.1.text": {
        "fr": "Une clé Fernet est créée et écrite dans <code>key.txt</code>. C'est elle qui chiffre et déchiffre tout le reste.",
        "ja": "Fernet キーが生成され、<code>key.txt</code> に書き込まれます。このキーがあらゆる暗号化・復号化を担います。"
    },
    "card.2.title": { "fr": "🔐 Ajouter un mot de passe", "ja": "🔐 パスワードの追加" },
    "card.2.text": {
        "fr": "Le mot de passe est chiffré puis rangé dans son propre fichier, par exemple <code>secret/github.txt</code>.",
        "ja": "パスワードは暗号化されて、専用ファイル（例：<code>secret/github.txt</code>）に保存されます。"
    },
    "card.3.title": { "fr": "🔓 Déchiffrer", "ja": "🔓 復号化" },
    "card.3.text": {
        "fr": "En donnant la clé et le nom du fichier, PyVault renvoie le mot de passe en clair.",
        "ja": "鍵とファイル名を指定すると、PyVault がパスワードを平文で返します。"
    },
    "card.4.title": { "fr": "📋 Lister &amp; rechercher", "ja": "📋 一覧表示＆検索" },
    "card.4.text": {
        "fr": "Une liste de tous les fichiers enregistrés, et une recherche par nom quand on en a beaucoup.",
        "ja": "保存済みの全ファイルを一覧表示し、数が多いときは名前で検索できます。"
    },
    "card.5.title": { "fr": "🗑️ Supprimer &amp; exporter", "ja": "🗑️ 削除＆エクスポート" },
    "card.5.text": {
        "fr": "Supprimer une entrée, ou tout exporter dans une archive zip d'un coup.",
        "ja": "エントリの削除や、すべての zip アーカイブへの一括エクスポートができます。"
    },
    "card.6.title": { "fr": "📊 Benchmark", "ja": "📊 ベンチマーク" },
    "card.6.text": {
        "fr": "Un notebook Jupyter mesure le temps de chiffrement / déchiffrement selon la taille des données.",
        "ja": "Jupyter Notebook がデータサイズに応じた暗号化／復号化時間を測定します。"
    },

    /* ---------- cli demo ---------- */
    "cli.demo": {
        "fr": "S. [Stars Project]      0. [Generate Key (Obliged)]     Q. [Leave]\n\n        1. [Add Password]   4. [Export (Zipfiles)]\n        2. [List Pswd]      5. [Delete Passwd]\n        3. [Decrypt Pswd]   6. [Search Website]\n\n        Choices : <span class=\"blink\">▌</span>",
        "ja": "S. [プロジェクトにスターを付ける]    0. [鍵の生成（必須）]     Q. [終了]\n\n        1. [パスワード追加]    4. [エクスポート（Zip）]\n        2. [一覧表示]          5. [パスワード削除]\n        3. [パスワード復号]    6. [ウェブサイト検索]\n\n        選択 : <span class=\"blink\">▌</span>"
    },

    /* ---------- why ---------- */
    "why.title": { "fr": "Pourquoi je l'ai fait", "ja": "なぜ作ったのか" },
    "why.intro": {
        "fr": "Je n'aime pas suivre des tutos sans rien retenir. Construire PyVault, c'est une façon de m'obliger à répondre moi-même à des questions du genre :",
        "ja": "何も身につかないチュートリアルに従うのは好きではありません。PyVault を構築するのは、次のような疑問に自分で答えざるを得なくする方法です。"
    },
    "why.1": {
        "fr": "Comment on stocke un secret sans le laisser en clair sur le disque ?",
        "ja": "秘密をディスク上に平文のまま残さずに保存するにはどうすればいいのか？"
    },
    "why.2": {
        "fr": "Pourquoi une clé d'abord, puis un mot de passe maître ensuite ?",
        "ja": "なぜ最初に鍵、次にマスターパスワードなのか？"
    },
    "why.3": {
        "fr": "Comment passer d'une pile de fichiers à une vraie base de données ?",
        "ja": "ファイルの羅列から本格的なデータベースへどう移行するのか？"
    },
    "why.4": {
        "fr": "Et si un jour ça devient une interface web, par où on commence ?",
        "ja": "いつかウェブインターフェースにするなら、どこから始めるのか？"
    },

    /* ---------- readme page head ---------- */
    "readme.kicker": { "fr": "Documentation du dépôt", "ja": "リポジトリのドキュメント" },
    "readme.desc": {
        "fr": "Le contenu du fichier README, tel qu'il apparaît sur la page GitHub du projet.",
        "ja": "README ファイルの内容（プロジェクトの GitHub ページに表示されるものと同じ）です。"
    },

    /* ---------- readme (mirror du README.md) ---------- */
    "r.lead1": {
        "fr": "<strong>PyVault</strong> is a local password and secrets manager written in Python.",
        "ja": "<strong>PyVault</strong> は、Python で書かれたローカルパスワード＆シークレット管理ツールです。"
    },
    "r.lead2": {
        "fr": "The goal of this project is to build a simple, private and secure way to store sensitive information locally while learning how encryption, databases and application architecture work.",
        "ja": "このプロジェクトの目標は、暗号化・データベース・アプリケーションのアーキテクチャについて学びながら、機密情報をローカルにシンプルかつプライベートに保存する安全な方法を構築することです。"
    },
    "r.note": {
        "fr": "⚠️ <strong>PyVault is currently under development.</strong>",
        "ja": "⚠️ <strong>PyVault は現在開発中です。</strong>"
    },
    "r.features": { "fr": "✨ Features", "ja": "✨ 機能" },
    "r.features.avail": { "fr": "Currently available", "ja": "現在利用可能" },
    "r.feats.1": { "fr": "🔑 Generate Fernet encryption keys", "ja": "🔑 Fernet 暗号化キーの生成" },
    "r.feats.2": { "fr": "🔐 Encrypt and store passwords using Fernet", "ja": "🔐 Fernet を使ったパスワードの暗号化と保存" },
    "r.feats.3": { "fr": "💾 Store each password in a dedicated file per website", "ja": "💾 ウェブサイトごとに専用ファイルへパスワードを保存" },
    "r.feats.4": { "fr": "🔓 Decrypt and retrieve stored passwords", "ja": "🔓 保存済みパスワードの復号化と取得" },
    "r.feats.5": { "fr": "📋 List all saved entries", "ja": "📋 保存済みエントリの一覧表示" },
    "r.feats.6": { "fr": "🔎 Search stored passwords", "ja": "🔎 保存済みパスワードの検索" },
    "r.feats.7": { "fr": "🗑️ Delete passwords", "ja": "🗑️ パスワードの削除" },
    "r.feats.8": { "fr": "📤 Export passwords", "ja": "📤 パスワードのエクスポート" },
    "r.feats.9": { "fr": "🖥️ Simple CLI interface", "ja": "🖥️ シンプルな CLI インターフェース" },
    "r.feats.10": { "fr": "🧪 Unit tests", "ja": "🧪 単体テスト" },
    "r.feats.11": { "fr": "📊 Encryption / decryption benchmark", "ja": "📊 暗号化／復号化ベンチマーク" },
    "r.features.planned": { "fr": "Planned", "ja": "予定" },
    "r.planned.1": { "fr": "🗄️ SQLite database", "ja": "🗄️ SQLite データベース" },
    "r.planned.2": { "fr": "🔑 Master password", "ja": "🔑 マスターパスワード" },
    "r.planned.3": { "fr": "🔒 Vault locking", "ja": "🔒 ボールトのロック" },
    "r.planned.4": { "fr": "🌐 Local API", "ja": "🌐 ローカル API" },
    "r.planned.5": { "fr": "🖥️ Web interface", "ja": "🖥️ ウェブインターフェース" },

    "r.why": { "fr": "🧠 Why PyVault?", "ja": "🧠 PyVault を作る理由" },
    "r.why.1": {
        "fr": "I wanted to create a project that was more than a simple Python script.",
        "ja": "私は、単なる Python スクリプト以上のプロジェクトを作りたいと思いました。"
    },
    "r.why.2": {
        "fr": "PyVault is also a way for me to learn how different parts of a real application work together:",
        "ja": "PyVault は、実際のアプリケーションのさまざまな部分がどのように連携するかを学ぶための手段でもあります。"
    },
    "r.learn.1": { "fr": "Python", "ja": "Python" },
    "r.learn.2": { "fr": "Cryptography", "ja": "暗号化（Cryptography）" },
    "r.learn.3": { "fr": "Databases", "ja": "データベース" },
    "r.learn.4": { "fr": "APIs", "ja": "API" },
    "r.learn.5": { "fr": "Authentication", "ja": "認証" },
    "r.learn.6": { "fr": "Security", "ja": "セキュリティ" },
    "r.learn.7": { "fr": "Software architecture", "ja": "ソフトウェアアーキテクチャ" },
    "r.learn.8": { "fr": "Performance testing", "ja": "パフォーマンステスト" },
    "r.why.3": {
        "fr": "Instead of only following tutorials, I want to build the project myself, encounter problems, research solutions and document the entire process.",
        "ja": "チュートリアルに従うだけではなく、プロジェクトを自分で構築し、問題に直面して調査し、そのプロセス全体を文書化したいと考えています。"
    },

    "r.arch": { "fr": "🏗️ Architecture", "ja": "🏗️ アーキテクチャ" },
    "r.arch.desc": {
        "fr": "The architecture below shows both the <strong>current project</strong> and the features planned for the future.",
        "ja": "下記のアーキテクチャは、<strong>現在のプロジェクト</strong>と将来の予定機能の両方を示しています。"
    },
    "r.arch.key": {
        "fr": "<strong>CURRENT</strong> = already implemented<br><strong>PLANNED</strong> = planned for a future version",
        "ja": "<strong>現在</strong> = すでに実装済み<br><strong>予定</strong> = 将来のバージョンで計画中"
    },

    "r.structure": { "fr": "📁 Current Project Structure", "ja": "📁 現在のプロジェクト構成" },
    "r.structure.pre": {
        "fr": "PyVault/\n\n│\n├── commands/\n│   ├── add.py\n│   ├── decrypt.py\n│   ├── delete.py\n│   ├── export.py\n│   ├── generate_key.py\n│   ├── list.py\n│   └── search.py\n│\n├── secret/               ← stores encrypted password files\n│\n├── tests/                ← unit tests\n│\n├── images/\n│   └── benchmark.png     ← encryption/decryption benchmark\n│\n├── notebooks/\n│   └── benchmark.ipynb   ← Jupyter benchmark\n│\n├── main.py\n├── system_info.py\n├── key.txt\n├── .gitignore\n├── LICENSE\n└── README.md",
        "ja": "PyVault/\n\n│\n├── commands/\n│   ├── add.py\n│   ├── decrypt.py\n│   ├── delete.py\n│   ├── export.py\n│   ├── generate_key.py\n│   ├── list.py\n│   └── search.py\n│\n├── secret/               ← 暗号化されたパスワードファイルの保存先\n│\n├── tests/                ← 単体テスト\n│\n├── images/\n│   └── benchmark.png     ← 暗号化／復号化ベンチマーク\n│\n├── notebooks/\n│   └── benchmark.ipynb   ← Jupyter ベンチマーク\n│\n├── main.py\n├── system_info.py\n├── key.txt\n├── .gitignore\n├── LICENSE\n└── README.md"
    },

    "r.encryption": { "fr": "🔐 Current Encryption System", "ja": "🔐 現在の暗号化システム" },
    "r.encryption.text": {
        "fr": "PyVault currently uses <strong>Fernet</strong> from the <code>cryptography</code> library.",
        "ja": "PyVault は現在、<code>cryptography</code> ライブラリの <strong>Fernet</strong> を使用しています。"
    },
    "r.encryption.gen": { "fr": "A key is generated with:", "ja": "キーは次のように生成されます。" },
    "r.encryption.snip1": { "fr": "key = Fernet.generate_key()", "ja": "鍵 = Fernet.generate_key()" },
    "r.encryption.stored": { "fr": "The key is currently stored locally in:", "ja": "キーは現在、ローカルの次のファイルに保存されます。" },
    "r.encryption.when": {
        "fr": "When adding a password, PyVault encrypts it before storing it:",
        "ja": "パスワードを追加するとき、PyVault は保存前にパスワードを暗号化します。"
    },
    "r.encryption.snip2": {
        "fr": "fernet = Fernet(key.encode())\n\nencrypted = fernet.encrypt(passwd.encode())",
        "ja": "暗号器 = Fernet(鍵.encode())\n\n暗号文 = 暗号器.encrypt(パスワード.encode())"
    },
    "r.encryption.then": {
        "fr": "The encrypted password is then stored in a dedicated file inside the <code>secret/</code> folder, one file per website:",
        "ja": "暗号化されたパスワードは、<code>secret/</code> フォルダ内のウェブサイトごとの専用ファイルに保存されます。"
    },
    "r.encryption.example": {
        "fr": "Example content of <code>secret/github.txt</code>:",
        "ja": "<code>secret/github.txt</code> の内容例："
    },
    "r.encryption.notdirect": {
        "fr": "The password itself is <strong>not stored directly</strong> in the file.",
        "ja": "パスワード自体はファイルに<strong>直接保存されません</strong>。"
    },
    "r.encryption.warn": {
        "fr": "⚠️ This is an early prototype. The current key management system is not considered secure enough for production use.",
        "ja": "⚠️ これは初期プロトタイプです。現在のキー管理システムは、本番利用には十分に安全とは見なされていません。"
    },

    "r.benchmark": { "fr": "📊 Benchmark", "ja": "📊 ベンチマーク" },
    "r.benchmark.1": {
        "fr": "PyVault includes a benchmark using <strong>Jupyter Notebook</strong> to measure the performance of Fernet encryption and decryption.",
        "ja": "PyVault には、Fernet の暗号化と復号化のパフォーマンスを測定する <strong>Jupyter Notebook</strong> ベンチマークが含まれています。"
    },
    "r.benchmark.2": {
        "fr": "The benchmark tests multiple data sizes, from a few bytes up to 1 MB, and performs multiple iterations for each size.",
        "ja": "ベンチマークは、数バイトから最大 1 MB までの複数のデータサイズをテストし、各サイズについて複数回の反復を実行します。"
    },
    "r.benchmark.3": { "fr": "The results are visualized in the following graph:", "ja": "結果は次のグラフで可視化されます。" },
    "r.benchmark.fig": { "fr": "PyVault Encryption / Decryption Benchmark", "ja": "PyVault 暗号化／復号化ベンチマーク" },
    "r.benchmark.4": {
        "fr": "The benchmark helps measure how encryption and decryption performance changes as the amount of data increases.",
        "ja": "ベンチマークは、データ量の増加に伴って暗号化・復号化のパフォーマンスがどのように変化するかを測定するのに役立ちます。"
    },
    "r.benchmark.5": { "fr": "The benchmark notebook is located at:", "ja": "ベンチマークノートブックは次の場所にあります。" },
    "r.benchmark.6": {
        "fr": "It can be used to experiment with PyVault's encryption system and compare future implementations.",
        "ja": "PyVault の暗号化システムの実験や、将来の実装との比較に使用できます。"
    },

    "r.install": { "fr": "🚀 Installation", "ja": "🚀 インストール" },
    "r.install.1": { "fr": "Clone the repository:", "ja": "リポジトリをクローンします。" },
    "r.install.2": { "fr": "Create a virtual environment:", "ja": "仮想環境を作成します。" },
    "r.install.deps": { "fr": "Install dependencies:", "ja": "依存関係をインストールします。" },

    "r.usage": { "fr": "▶️ Usage", "ja": "▶️ 使い方" },
    "r.usage.1": { "fr": "Start PyVault:", "ja": "PyVault を起動します。" },
    "r.usage.2": { "fr": "You will see:", "ja": "次の画面が表示されます。" },
    "r.usage.menu": {
        "fr": "S. [Stars Project]      0. [Generate Key (Obliged)] Q. [Leave]\n\n        1. [Add Password]   4. [Export (Zipfiles)]\n        2. [List Pswd]      5. [Delete Passwd]\n        3. [Decrypt Pswd]   6. [Search Website]\n\n        Choices :",
        "ja": "S. [プロジェクトにスターを付ける] 0. [鍵の生成（必須）] Q. [終了]\n\n        1. [パスワード追加]    4. [エクスポート（Zip）]\n        2. [一覧表示]          5. [パスワード削除]\n        3. [パスワード復号]    6. [ウェブサイト検索]\n\n        選択 :"
    },
    "r.usage.genkey": { "fr": "Generate a key", "ja": "鍵を生成する" },
    "r.usage.choose": { "fr": "Choose:", "ja": "次のように入力して選択します。" },
    "r.usage.genkey.1": {
        "fr": "PyVault will generate a Fernet key and save it to:",
        "ja": "PyVault が Fernet キーを生成し、次の場所に保存します。"
    },
    "r.usage.add": { "fr": "Add a password", "ja": "パスワードを追加する" },
    "r.usage.add.1": { "fr": "PyVault will ask for:", "ja": "PyVault は次の入力を求めます。" },
    "r.usage.add.prompts": {
        "fr": "Enter your key please thanks... :\n\nEnter name your website Example (github) :\n\nEnter your password :",
        "ja": "鍵を入力してください、お願いします… :\n\nウェブサイトの名前を入力してください（例：github） :\n\nパスワードを入力してください :"
    },
    "r.usage.add.2": {
        "fr": "The password will be encrypted and stored in:",
        "ja": "パスワードは暗号化されて、次の場所に保存されます。"
    },
    "r.usage.list": { "fr": "List saved entries", "ja": "保存済みエントリを一覧表示する" },
    "r.usage.list.1": {
        "fr": "PyVault will display all files stored in the <code>secret/</code> folder, one per website.",
        "ja": "PyVault は <code>secret/</code> フォルダに保存されているウェブサイトごとの全ファイルを表示します。"
    },
    "r.usage.decrypt": { "fr": "Decrypt a password", "ja": "パスワードを復号する" },
    "r.usage.decrypt.1": { "fr": "PyVault will ask for:", "ja": "PyVault は次の入力を求めます。" },
    "r.usage.decrypt.prompts": {
        "fr": "Enter your key :\nEnter the file name example (github.txt) :",
        "ja": "鍵を入力してください :\nファイル名を入力してください（例：github.txt） :"
    },
    "r.usage.decrypt.2": { "fr": "It will then display:", "ja": "すると次のように表示されます。" },
    "r.usage.decrypt.out": {
        "fr": "Your Password is [ your_password_here ]",
        "ja": "あなたのパスワードは [ あなたのパスワード ] です"
    },

    "r.tests": { "fr": "🧪 Running Tests", "ja": "🧪 テストの実行" },
    "r.tests.1": {
        "fr": "Unit tests are available in the <code>tests/</code> folder.",
        "ja": "単体テストは <code>tests/</code> フォルダにあります。"
    },
    "r.tests.2": { "fr": "Run them with:", "ja": "次のコマンドで実行できます。" },

    "r.benchrun": { "fr": "📊 Running the Benchmark", "ja": "📊 ベンチマークの実行" },
    "r.benchrun.1": { "fr": "The benchmark is available as a Jupyter Notebook.", "ja": "ベンチマークは Jupyter Notebook として利用できます。" },
    "r.benchrun.2": { "fr": "Install Jupyter if necessary:", "ja": "必要に応じて Jupyter をインストールします。" },
    "r.benchrun.3": { "fr": "Start Jupyter:", "ja": "Jupyter を起動します。" },
    "r.benchrun.4": { "fr": "Then open:", "ja": "そして次のファイルを開きます。" },
    "r.benchrun.5": { "fr": "The benchmark measures:", "ja": "ベンチマークでは以下を測定します。" },
    "r.benchrun.li.1": { "fr": "Encryption speed", "ja": "暗号化速度" },
    "r.benchrun.li.2": { "fr": "Decryption speed", "ja": "復号化速度" },
    "r.benchrun.li.3": { "fr": "Different data sizes", "ja": "さまざまなデータサイズ" },
    "r.benchrun.li.4": { "fr": "Average execution time", "ja": "平均実行時間" },
    "r.benchrun.li.5": { "fr": "Performance scaling", "ja": "パフォーマンスのスケーリング" },

    "r.roadmap": { "fr": "🛠️ Roadmap", "ja": "🛠️ ロードマップ" },
    "r.roadmap.p1": { "fr": "Phase 1 — Prototype", "ja": "フェーズ 1 — プロトタイプ" },
    "r.roadmap.p2": { "fr": "Phase 2 — Vault", "ja": "フェーズ 2 — ボールト" },
    "r.roadmap.p3": { "fr": "Phase 3 — Security", "ja": "フェーズ 3 — セキュリティ" },
    "r.roadmap.p4": { "fr": "Phase 4 — Database", "ja": "フェーズ 4 — データベース" },
    "r.roadmap.p5": { "fr": "Phase 5 — API", "ja": "フェーズ 5 — API" },
    "r.roadmap.p6": { "fr": "Phase 6 — Interface", "ja": "フェーズ 6 — インターフェース" },
    "r.roadmap.p7": { "fr": "Phase 7 — Open Source", "ja": "フェーズ 7 — オープンソース" },
    "r.rm.p1t1": { "fr": "Generate Fernet key", "ja": "Fernet キーの生成" },
    "r.rm.p1t2": { "fr": "Save key locally", "ja": "キーをローカルに保存" },
    "r.rm.p1t3": { "fr": "Encrypt passwords", "ja": "パスワードの暗号化" },
    "r.rm.p1t4": { "fr": "Save encrypted passwords (one file per website in <code>secret/</code>)", "ja": "暗号化されたパスワードの保存（<code>secret/</code> 内のウェブサイトごとのファイル）" },
    "r.rm.p1t5": { "fr": "Store website information", "ja": "ウェブサイト情報の保存" },
    "r.rm.p1t6": { "fr": "Basic CLI", "ja": "基本 CLI" },
    "r.rm.p1t7": { "fr": "Decrypt passwords", "ja": "パスワードの復号化" },
    "r.rm.p1t8": { "fr": "List saved entries", "ja": "保存済みエントリの一覧表示" },
    "r.rm.p2t1": { "fr": "Search passwords", "ja": "パスワードの検索" },
    "r.rm.p2t2": { "fr": "Delete passwords", "ja": "パスワードの削除" },
    "r.rm.p2t3": { "fr": "Export passwords", "ja": "パスワードのエクスポート" },
    "r.rm.p2t4": { "fr": "Load existing key automatically", "ja": "既存キーの自動読み込み" },
    "r.rm.p2t5": { "fr": "Better data structure", "ja": "より良いデータ構造" },
    "r.rm.p3t1": { "fr": "Master password", "ja": "マスターパスワード" },
    "r.rm.p3t2": { "fr": "Better key management", "ja": "より良いキー管理" },
    "r.rm.p3t3": { "fr": "Vault locking", "ja": "ボールトのロック" },
    "r.rm.p3t4": { "fr": "Failed attempt protection", "ja": "失敗試行への保護" },
    "r.rm.p3t5": { "fr": "Security tests", "ja": "セキュリティテスト" },
    "r.rm.p3t6": { "fr": "Threat model", "ja": "脅威モデル" },
    "r.rm.p4t1": { "fr": "SQLite", "ja": "SQLite" },
    "r.rm.p4t2": { "fr": "Database models", "ja": "データベースモデル" },
    "r.rm.p4t3": { "fr": "Encrypted database fields", "ja": "暗号化されたデータベースフィールド" },
    "r.rm.p4t4": { "fr": "Data validation", "ja": "データ検証" },
    "r.rm.p4t5": { "fr": "Database migrations", "ja": "データベースマイグレーション" },
    "r.rm.p5t1": { "fr": "Local API", "ja": "ローカル API" },
    "r.rm.p5t2": { "fr": "FastAPI", "ja": "FastAPI" },
    "r.rm.p5t3": { "fr": "Authentication", "ja": "認証" },
    "r.rm.p5t4": { "fr": "API documentation", "ja": "API ドキュメント" },
    "r.rm.p6t1": { "fr": "Web interface", "ja": "ウェブインターフェース" },
    "r.rm.p6t2": { "fr": "Vault dashboard", "ja": "ボールトダッシュボード" },
    "r.rm.p6t3": { "fr": "Password manager UI", "ja": "パスワードマネージャー UI" },
    "r.rm.p6t4": { "fr": "API integration", "ja": "API 統合" },
    "r.rm.p7t1": { "fr": "Complete documentation", "ja": "完全なドキュメント" },
    "r.rm.p7t2": { "fr": "Automated tests", "ja": "自動テスト" },
    "r.rm.p7t3": { "fr": "CI/CD", "ja": "CI/CD" },
    "r.rm.p7t4": { "fr": "Security review", "ja": "セキュリティレビュー" },
    "r.rm.p7t5": { "fr": "PyPI package", "ja": "PyPI パッケージ" },

    "r.story": { "fr": "📚 Development Story", "ja": "📚 開発ストーリー" },
    "r.story.1": { "fr": "PyVault isn't only a software project.", "ja": "PyVault は単なるソフトウェアプロジェクトではありません。" },
    "r.story.2": { "fr": "I also want to document the process of building it.", "ja": "構築のプロセスを文書化することも目的としています。" },
    "r.story.3": { "fr": "The documentation will cover:", "ja": "ドキュメントでは以下を取り上げます。" },
    "r.story.pre": {
        "fr": "Idea\n\n  ↓\n\nFirst prototype\n\n  ↓\n\nEncryption\n\n  ↓\n\nProblems\n\n  ↓\n\nResearch\n\n  ↓\n\nSolutions\n\n  ↓\n\nSecurity\n\n  ↓\n\nTesting\n\n  ↓\n\nBenchmarking\n\n  ↓\n\nFinal application",
        "ja": "アイデア\n\n  ↓\n\n最初のプロトタイプ\n\n  ↓\n\n暗号化\n\n  ↓\n\n問題\n\n  ↓\n\n調査\n\n  ↓\n\n解決策\n\n  ↓\n\nセキュリティ\n\n  ↓\n\nテスト\n\n  ↓\n\nベンチマーク\n\n  ↓\n\n最終アプリケーション"
    },
    "r.story.4": {
        "fr": "The objective is to show what I learned, what went wrong and how the project evolved over time.",
        "ja": "目標は、何を学んだのか、何がうまくいかなかったのか、そしてプロジェクトがどのように進化してきたのかを示すことです。"
    },

    "r.status": { "fr": "🧪 Status", "ja": "🧪 ステータス" },
    "r.status.1": { "fr": "<strong>Current version:</strong> <code>0.2.0-dev</code>", "ja": "<strong>現在のバージョン:</strong> <code>0.2.0-dev</code>" },
    "r.status.2": { "fr": "PyVault is currently an experimental project.", "ja": "PyVault は現在、実験的なプロジェクトです。" },
    "r.status.3": {
        "fr": "The project is actively being developed and its architecture may change significantly.",
        "ja": "プロジェクトは積極的に開発されており、そのアーキテクチャは大きく変わる可能性があります。"
    },

    "r.contrib": { "fr": "🤝 Contributing", "ja": "🤝 コントリビューション" },
    "r.contrib.1": { "fr": "Contributions, suggestions and bug reports are welcome.", "ja": "コントリビューション、提案、バグ報告を歓迎します。" },
    "r.contrib.2": { "fr": "If you find a problem, feel free to open an issue.", "ja": "問題を見つけたら、お気軽に issue を開いてください。" },
    "r.contrib.3": {
        "fr": "For larger changes, please open an issue first to discuss the idea.",
        "ja": "大きな変更の場合は、先に issue を開いてアイデアについて話し合ってください。"
    },

    "r.license": { "fr": "📄 License", "ja": "📄 ライセンス" },
    "r.license.1": {
        "fr": "PyVault is released under the <strong>MIT License</strong>.",
        "ja": "PyVault は <strong>MIT ライセンス</strong> のもとで公開されています。"
    },
    "r.license.2": {
        "fr": "See <a href=\"../LICENSE\"><code>LICENSE</code></a> for more information.",
        "ja": "詳細は <a href=\"../LICENSE\"><code>LICENSE</code></a> を参照してください。"
    },

    "r.author": { "fr": "👤 Author", "ja": "👤 作者" },

    "r.closing": {
        "fr": "Built with Python 🐍<br>Learning by building.",
        "ja": "Python 🐍 で構築されています。<br>作って学ぶ。（Learning by building.）"
    },

    /* ---------- test (terminal) ---------- */
    "test.kicker": { "fr": "Bac à sable interactif", "ja": "インタラクティブなサンドボックス" },
    "test.title": { "fr": "PyVault en CLI — en direct", "ja": "PyVault を CLI で — ライブ実行" },
    "test.desc": {
        "fr": "Une vraie console, comme <code>python main.py</code>, qui tourne dans ton navigateur.\n                    Tape les mêmes commandes. Le chiffrement est le vrai Fernet — ce que tu produis ici peut être déchiffré\n                    par le PyVault en Python, et l'inverse. Les entrées sont enregistrées dans ce navigateur, comme le dossier\n                    <code>secret/</code>.",
        "ja": "<code>python main.py</code> と同じ、実際に動作するコンソールがブラウザ内で動きます。\n                    同じコマンドを入力してください。暗号化は本物の Fernet です。ここで生成したデータは Python 版 PyVault で復号でき、\n                    その逆も可能です。エントリはブラウザ内（<code>secret/</code> フォルダのように）に保存されます。"
    },
    "test.prompt": { "fr": "Choices :", "ja": "選択 :" },
    "test.placeholder": { "fr": "Tape une commande (0, 1, 2… ou help)", "ja": "コマンドを入力してください（0、1、2… または help）" },
    "test.aria": { "fr": "Commande PyVault", "ja": "PyVault コマンド" },
    "test.cmds.title": { "fr": "Commandes", "ja": "コマンド" },
    "test.cmd.0": { "fr": "Générer une clé", "ja": "鍵の生成" },
    "test.cmd.1": { "fr": "Ajouter un mot de passe", "ja": "パスワードの追加" },
    "test.cmd.2": { "fr": "Lister les entrées", "ja": "エントリの一覧表示" },
    "test.cmd.3": { "fr": "Déchiffrer un mot de passe", "ja": "パスワードの復号化" },
    "test.cmd.4": { "fr": "Exporter (zip)", "ja": "エクスポート（zip）" },
    "test.cmd.5": { "fr": "Supprimer une entrée", "ja": "エントリの削除" },
    "test.cmd.6": { "fr": "Rechercher un site", "ja": "サイトの検索" },
    "test.cmd.s": { "fr": "Ouvrir le dépôt GitHub", "ja": "GitHub リポジトリを開く" },
    "test.cmd.q": { "fr": "Quitter", "ja": "終了" },
    "test.cmd.help": { "fr": "help Aide · clear Nettoyer", "ja": "help ヘルプ · clear クリア" },

    /* ---------- terminal (tool.js) ---------- */
    "term.banner.menu": {
        "fr": "S. [Stars Project]          0. [Generate Key (Obliged)]     Q. [Leave]",
        "ja": "S. [プロジェクトにスターを付ける]    0. [鍵の生成（必須）]     Q. [終了]"
    },
    "term.banner.menu1": { "fr": "        1. [Add Password]   4. [Export (Zipfiles)]", "ja": "        1. [パスワード追加]    4. [エクスポート（Zip）]" },
    "term.banner.menu2": { "fr": "        2. [List Pswd]      5. [Delete Passwd]", "ja": "        2. [一覧表示]          5. [パスワード削除]" },
    "term.banner.menu3": { "fr": "        3. [Decrypt Pswd]   6. [Search Website]", "ja": "        3. [パスワード復号]    6. [ウェブサイト検索]" },
    "term.banner.saved": {
        "fr": "%s entrée(s) enregistrée(s). Tape 2 pour lister. (%s)",
        "ja": "保存されたエントリ: %s 件。一覧表示は「2」を入力（%s）"
    },
    "term.banner.key": { "fr": "clé chargée", "ja": "鍵を読み込み済み" },
    "term.banner.nokey": { "fr": "aucune clé — tape 0", "ja": "鍵がありません —「0」を入力" },
    "term.banner.empty": {
        "fr": "Démarrage : aucun mot de passe enregistré. Tape 0 pour générer une clé.",
        "ja": "起動しました: 保存されたパスワードはありません。「0」で鍵を生成してください。"
    },
    "term.help": {
        "fr": "0 générer une clé · 1 ajouter · 2 lister · 3 déchiffrer · 4 exporter · 5 supprimer · 6 rechercher · s stars · q quitter · clear nettoyer",
        "ja": "0 鍵を生成 · 1 追加 · 2 一覧 · 3 復号 · 4 エクスポート · 5 削除 · 6 検索 · s スター · q 終了 · clear クリア"
    },
    "term.keygen.done": { "fr": "Clé Fernet générée et enregistrée dans key.txt", "ja": "Fernet 鍵を生成し、key.txt に保存しました" },
    "term.needkey": { "fr": "Tape 0 d'abord pour générer une clé.", "ja": "先に「0」で鍵を生成してください。" },
    "term.needkey2": { "fr": "Tape 0 d'abord pour générer (ou récupérer) une clé.", "ja": "先に「0」で鍵を生成（または読み込み）してください。" },
    "term.prompt.site": { "fr": "Enter the name of your website (e.g. github) :", "ja": "ウェブサイトの名前を入力してください（例：github） :" },
    "term.prompt.pass": { "fr": "Enter your password :", "ja": "パスワードを入力してください :" },
    "term.prompt.file": { "fr": "Enter the file name example (github.txt) :", "ja": "ファイル名を入力してください（例：github.txt） :" },
    "term.prompt.delfile": { "fr": "Enter the name of the file to delete (just the name, no extension) :", "ja": "削除するファイル名を入力してください（拡張子なし） :" },
    "term.prompt.search": { "fr": "Enter the name of your file :", "ja": "ファイル名を入力してください :" },
    "term.encrypted": { "fr": "Encrypted password : ", "ja": "暗号化されたパスワード : " },
    "term.saved": { "fr": "Enregistré dans secret/%s", "ja": "secret/%s に保存しました" },
    "term.err": { "fr": "Erreur : ", "ja": "エラー : " },
    "term.open": { "fr": "Ouverture du dépôt… ⭐", "ja": "リポジトリを開いています… ⭐" },
    "term.bye": {
        "fr": "À bientôt ! Recharge la page pour relancer une session CLI.",
        "ja": "また会いましょう！ページを再読み込みすると CLI セッションを再開できます。"
    },
    "term.unknown": {
        "fr": "That choice doesn't exist. Tape help pour voir les commandes.",
        "ja": "その選択肢は存在しません。help でコマンド一覧を確認できます。"
    },
    "term.vault.empty": { "fr": "secret/ est vide. Tape 1 pour ajouter un mot de passe.", "ja": "secret/ は空です。「1」でパスワードを追加してください。" },
    "term.vault.content": { "fr": "Contenu de secret/ :", "ja": "secret/ の内容 :" },
    "term.vault.count": { "fr": "(%s entrée(s))", "ja": "（%s エントリ）" },
    "term.notfound": { "fr": "Fichier introuvable : ", "ja": "ファイルが見つかりません : " },
    "term.passwordis": { "fr": "Your Password is [ %s ]", "ja": "あなたのパスワードは [ %s ] です" },
    "term.decryptfail": { "fr": "Échec du déchiffrement : ", "ja": "復号に失敗しました : " },
    "term.noresult": { "fr": "Aucun résultat pour « %s »", "ja": "「 %s 」の結果はありません" },
    "term.delete.notfound": { "fr": "Introuvable : ", "ja": "見つかりません : " },
    "term.delete.ok": { "fr": "Delete Success — suppression de %s", "ja": "削除に成功しました — %s を削除" },
    "term.export.empty": { "fr": "Rien à exporter. Ajoute un mot de passe d'abord.", "ja": "エクスポートするものはありません。先にパスワードを追加してください。" },
    "term.export.done": { "fr": "export.zip téléchargé (%s fichier(s)).", "ja": "export.zip をダウンロードしました（%s ファイル）。" },
    "term.choices": { "fr": "Choices : ", "ja": "選択 : " },

    /* ---------- idées ---------- */
    "ideas.kicker": { "fr": "La suite pour PyVault", "ja": "PyVault の今後" },
    "ideas.title": { "fr": "Idées &amp; choses à ajouter", "ja": "アイデア＆追加予定" },
    "ideas.desc": {
        "fr": "Tout ce qui traîne dans ma tête ou dans le cahier d'idées du dépôt, classé par ordre à peu près chronologique. Rien n'est garanti, c'est une liste vivante.",
        "ja": "頭の中やリポジトリのアイデアノートにあるものを、ほぼ時系列順にまとめています。保証はなく、生きているリストです。"
    },
    "idea.state.wait": { "fr": "en attente", "ja": "保留中" },
    "idea.state.think": { "fr": "à réfléchir", "ja": "検討中" },
    "idea.a1.t": { "fr": "Charger la clé automatiquement", "ja": "鍵を自動的に読み込む" },
    "idea.a1.d": {
        "fr": "Aujourd'hui il faut taper la clé à chaque commande. Ce serait mieux que le programme retrouve tout seul <code>key.txt</code> au démarrage.",
        "ja": "現在はコマンドごとに鍵を入力する必要があります。起動時にプログラムが <code>key.txt</code> を自動的に見つけてくれれば理想的です。"
    },
    "idea.a2.t": { "fr": "Une vraie structure de données", "ja": "本格的なデータ構造" },
    "idea.a2.d": {
        "fr": "Les fichiers par site, ça marche, mais ça ne tient pas la route longtemps. Il faut penser à un format plus propre avec des métadonnées.",
        "ja": "サイトごとのファイルは機能しますが、長続きしません。メタデータを持つよりきれいな形式を考える必要があります。"
    },
    "idea.a3.t": { "fr": "Le mot de passe maître", "ja": "マスターパスワード" },
    "idea.a3.d": {
        "fr": "Le gros morceau : protéger le coffre avec un mot de passe maître, au lieu d'une clé posée en clair sur le disque.",
        "ja": "本丸は、ディスク上に平文で置かれた鍵ではなく、マスターパスワードでボールトを保護することです。"
    },
    "idea.a4.t": { "fr": "Verrouiller le coffre", "ja": "ボールトのロック" },
    "idea.a4.d": {
        "fr": "Un verrouillage après inactivité, et une protection contre les tentatives de mot de passe échouées.",
        "ja": "非アクティブ後の自動ロックと、失敗したパスワード試行への対策。"
    },
    "idea.a5.t": { "fr": "Mieux gérer la clé", "ja": "鍵の管理を改善する" },
    "idea.a5.d": {
        "fr": "Utiliser un vrai dérivé de clé (KDF) au lieu du simple <code>key.txt</code> qui traîne en clair.",
        "ja": "平文で放置されている単純な <code>key.txt</code> ではなく、本格的な鍵導出関数（KDF）を使用します。"
    },
    "idea.a6.t": { "fr": "Modèle de menaces", "ja": "脅威モデル" },
    "idea.a6.d": {
        "fr": "Poser noir sur blanc contre quoi on protège, et comment. Ça m'aidera à faire les bons choix pour la suite.",
        "ja": "何に対してどのように保護するかを明確にします。今後の正しい選択に役立ちます。"
    },
    "idea.a7.t": { "fr": "Passer à SQLite", "ja": "SQLite への移行" },
    "idea.a7.d": {
        "fr": "Une vraie base pour remplacer le système de fichiers : modèles, champs chiffrés, validation et migrations.",
        "ja": "ファイルシステムを置き換える本格的なデータベース：モデル、暗号化フィールド、検証、マイグレーション。"
    },
    "idea.a8.t": { "fr": "Une petite API locale", "ja": "小さなローカル API" },
    "idea.a8.d": {
        "fr": "Exposer PyVault via une API locale en FastAPI, avec authentification, histoire de pouvoir l'utiliser depuis d'autres outils.",
        "ja": "認証付きの FastAPI によるローカル API として PyVault を公開し、他のツールから利用できるようにします。"
    },
    "idea.a9.t": { "fr": "Une interface web", "ja": "ウェブインターフェース" },
    "idea.a9.d": {
        "fr": "Un tableau de bord pour tout gérer au lieu de la ligne de commande. Le grand projet à la fin.",
        "ja": "コマンドラインの代わりにすべてを管理するダッシュボード。最終的な大プロジェクトです。"
    },
    "idea.a10.t": { "fr": "Rendre ça solide", "ja": "堅牢にする" },
    "idea.a10.d": {
        "fr": "CI/CD, revue de sécurité, documentation complète, et pourquoi pas un package sur le PyPI un jour.",
        "ja": "CI/CD、セキュリティレビュー、完全なドキュメント、そしていつか PyPI へのパッケージ公開も。"
    },
    "ideas.board.title": { "fr": "Carnet d'idées — <code>idea/idea.md</code>", "ja": "アイデアノート — <code>idea/idea.md</code>" },
    "ideas.board.note": {
        "fr": "Le vrai fichier d'idées du dépôt ne contient pour l'instant que trois lignes. Je les garde ici telles quelles :",
        "ja": "リポジトリの実際のアイデアファイルには、今のところ 3 行しかありません。そのままここに載せています。"
    },
    "ideas.board.li.1": { "fr": "Ajouter une version japonaise du code dans un dossier <code>japanese</code>.", "ja": "コードの日本語版を <code>japanese</code> フォルダに追加する。" },
    "ideas.board.li.2": { "fr": "Ajouter le support de macOS.", "ja": "macOS をサポートする。" },
    "ideas.board.li.3": { "fr": "Créer son propre algorithme de chiffrement.", "ja": "独自の暗号化アルゴリズムを作成する。" },
    "ideas.cta.title": { "fr": "Une idée qui traîne ?", "ja": "アイデアはありますか？" },
    "ideas.cta.text": {
        "fr": "Les suggestions et les bug reports sont les bienvenus. La meilleure façon de m'en parler, c'est d'ouvrir une issue sur le dépôt.",
        "ja": "提案やバグ報告を歓迎します。一番の伝え方はリポジトリで issue を開くことです。"
    },
    "ideas.cta.btn": { "fr": "Ouvrir une issue", "ja": "issue を開く" },

    /* ---------- à propos ---------- */
    "about.kicker": { "fr": "Derrière le projet", "ja": "プロジェクトの背景" },
    "about.title": { "fr": "À propos", "ja": "概要" },
    "about.p.1": {
        "fr": "PyVault, c'est mon projet d'apprentissage. Je m'appelle <strong>xql</strong> et je vois ce dépôt comme un terrain de jeu où je peux me planter sans conséquence — et justement, apprendre de mes erreurs.",
        "ja": "PyVault は私の学習プロジェクトです。私は <strong>xql</strong>。このリポジトリを、失敗しても何も失わない遊び場として捉えています。そしてまさに、失敗から学ぶのです。"
    },
    "about.p.2": {
        "fr": "L'idée de départ est bête : je voulais un endroit pour ranger mes mots de passe qui ne soit pas chez quelqu'un d'autre. Le chemin pour y arriver me fait toucher à pas mal de sujets (chiffrement, stockage, API, sécurité) que je n'aurais jamais abordés avec un simple tuto.",
        "ja": "発端は単純です。パスワードを他人のサービスではなく自分の手元に置きたかった。その道のりで、簡単なチュートリアルでは決して触れなかったテーマ（暗号化、ストレージ、API、セキュリティ）に数多く触れることになりました。"
    },
    "about.p.3": {
        "fr": "Le projet est en développement actif et l'architecture peut encore beaucoup bouger. Si ça t'intéresse, le mieux c'est de suivre la <a href=\"#readme\" data-goto=\"readme\">roadmap</a> dans le README, ou de jeter un œil aux <a href=\"#idees\" data-goto=\"idees\">idées</a> pour voir où je vais.",
        "ja": "プロジェクトは活発に開発中で、アーキテクチャはまだ大きく変わる可能性があります。興味があれば、README の<a href=\"#readme\" data-goto=\"readme\">ロードマップ</a>を追うのがおすすめです。あるいは、今後の予定を知りたいなら<a href=\"#idees\" data-goto=\"idees\">アイデア</a>を見てみてください。"
    },
    "about.fact.version": { "fr": "Version actuelle", "ja": "現在のバージョン" },
    "about.fact.license": { "fr": "Licence", "ja": "ライセンス" },
    "about.fact.lang": { "fr": "Écrit en", "ja": "使用言語" },
    "about.fact.crypto": { "fr": "Chiffrement", "ja": "暗号化" },

    /* ---------- footer ---------- */
    "footer.text": {
        "fr": "PyVault — un projet d'apprentissage en Python. Fait à la main, café compris.",
        "ja": "PyVault — Python で作られた学習プロジェクト。手作り、コーヒー付き。"
    },
    "footer.license": { "fr": "Licence MIT", "ja": "MIT ライセンス" }
};


/* ---------- helpers ---------- */

function i18nGetLang() {
    var lang = localStorage.getItem(I18N_LANG_KEY);
    return (lang === "ja" || lang === "fr") ? lang : "fr";
}

function i18nSetLang(lang) {
    if (lang === "ja" || lang === "fr") {
        localStorage.setItem(I18N_LANG_KEY, lang);
    }
}

function t(key) {
    var entry = I18N[key];
    if (!entry) return key;
    var lang = i18nGetLang();
    return entry[lang] !== undefined ? entry[lang] : entry.fr;
}

function tArgs(key) {
    var value = t(key);
    var args = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < args.length; i++) {
        value = value.replace("%s", args[i]);
    }
    return value;
}

function applyI18n() {
    var lang = i18nGetLang();
    document.documentElement.setAttribute("lang", lang === "ja" ? "ja" : "fr");

    var els = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < els.length; i++) {
        var key = els[i].getAttribute("data-i18n");
        if (I18N[key]) els[i].innerHTML = I18N[key][lang] !== undefined ? I18N[key][lang] : I18N[key].fr;
    }

    var phs = document.querySelectorAll("[data-i18n-placeholder]");
    for (var j = 0; j < phs.length; j++) {
        var pk = phs[j].getAttribute("data-i18n-placeholder");
        if (I18N[pk]) phs[j].setAttribute("placeholder", I18N[pk][lang] !== undefined ? I18N[pk][lang] : I18N[pk].fr);
    }

    var ars = document.querySelectorAll("[data-i18n-aria]");
    for (var k = 0; k < ars.length; k++) {
        var ak = ars[k].getAttribute("data-i18n-aria");
        if (I18N[ak]) ars[k].setAttribute("aria-label", I18N[ak][lang] !== undefined ? I18N[ak][lang] : I18N[ak].fr);
    }

    if (I18N["meta.title"]) {
        document.title = I18N["meta.title"][lang] !== undefined ? I18N["meta.title"][lang] : I18N["meta.title"].fr;
    }

    var mers = document.querySelectorAll("[data-mermaid]");
    for (var m = 0; m < mers.length; m++) {
        mers[m].hidden = mers[m].getAttribute("data-mermaid") !== lang;
    }

    var switchEl = document.getElementById("lang-switch");
    if (switchEl) {
        var btns = switchEl.querySelectorAll(".lang-btn[data-lang]");
        for (var b = 0; b < btns.length; b++) {
            var active = btns[b].getAttribute("data-lang") === lang;
            btns[b].className = "lang-btn" + (active ? " active" : "");
            btns[b].setAttribute("aria-pressed", active ? "true" : "false");
        }
    }

    document.dispatchEvent(new CustomEvent("pyvault:lang", { detail: { lang: lang } }));
}