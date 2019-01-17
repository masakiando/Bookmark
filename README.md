# Bookmark
至高のクラウドメモ環境を求めて
https://sousaku-memo.net/php-system/1223
https://www.noodlesoft.com/

プリミティブ型
 •	string：Unicode文字の並びを表します
 •	number：整数と浮動小数点数の両方を表します
 •	boolean：論理的な真偽を表す
 •	undefined：まだ初期化されていない値を表します
 •	null：値なしを表します
 
https://subscription.packtpub.com/book/web_development/9781788295697/8/ch08lvl1sec65/consuming-store-from-the-components
https://www.youtube.com/watch?v=y59-frfKR58&list=PLRqwX-V7Uu6bmMRCIoTi72aNWHo7epX4L

https://subscription.packtpub.com/history
https://subscription.packtpub.com/video/web_development/9781788838429
https://subscription.packtpub.com/book/web_development/9781788293532
https://subscription.packtpub.com/book/web_development/9781788992749
https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w/playlists

http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-interval : 
https://jsfiddle.net/qhcumwy4/ : 
https://developer.mozilla.org/ja/docs/Web/Events : イベントリファレンス
https://qiita.com/Ted-HM/items/7dde25dcffae4cdc7923 :プログラミングでよく使う英単語のまとめ
https://github.com/johnpapa/vscode-angular-snippets :Angular TypeScript Snippets for VS Code
https://www.youtube.com/watch?v=rdK92pf3abs&index=5&list=PL55RiY5tL51pHpagYcrN9ubNLVXF8rGVi
https://www.youtube.com/watch?v=X9fdpGthrXA

https://subscription.packtpub.com/book/web_development/9781788293532/1

https://postd.cc/how-to-boost-your-vim-productivity/
https://kamiya555.github.io/2016/07/24/vim-ctrlp/
https://medium.freecodecamp.org/make-your-vim-smarter-using-ctrlp-and-ctags-846fc12178a4
https://eng-entrance.com/linux-vi-search
http://kaworu.jpn.org/kaworu/2008-03-29-1.php
ファイル名を変更 mv (オプション)［元ファイル名］［新しいファイル名］
ファイルのディレクトリを変更 mv (オプション)［移動させたいファイル名］［移動先ディレクトリ］
q: 、 q/ 、 q? 
:terminal で始まる新しいモード
brew でvim install
プラグインマネージャーinstall　方法 => https://qiita.com/tanabee/items/e2064c5ce59c85915940
vi ~/.vimrcに　vi ~/.vimrc　初期コピー　とプラグインマネージャーこと書く
vim で:PluginInstall　か　ターミナルでvim +PluginInstall +qall　インストール実行できる

Vim プラグインの探し方見る
[ vim.org, Vim Awesome]

タグジャンプ　「
brew install ctags
プロジェクトでctags -R　ctagsでファイル生成
~/.ctagsに設定
コントロール と]　でジャンプ
」

Plugin 'scrooloose/nerdtree'  
Plugin 'tpope/vim-surround'   "Hello world!"  'Hello world!'  cs”’
Plugin 'altercation/vim-colors-solarized'
Plugin 'scrooloose/syntastic'
Plugin 'leafgarland/typescript-vim'
Plugin 'majutsushi/tagbar'
Plugin 'terryma/vim-expand-region'    v   ,  Cntr v
Plugin 'kien/ctrlp.vim'

viで開いているファイルの再読み込み(更新とかリロード的な)は
:e!
:tabdo e!
:bufdo e!
*****************************************
  NERDTree
*****************************************



*****************************************
  NERDTree
*****************************************

NERDTree
map <C-n> :NERDTreeToggle<CR>

gt
次のタブに移動
gT
前のタブに移動
control + n
NERDTreeを開く
ファイル間をラクラク移動
ctrl-w t
o
表示
go
表示(移動なし)
t
新しいタブで開く
T
open in new tab silently middle-click
i
分割して開く
gi
分割して表示(移動無し)
s
縦分割して表示
gs
縦分割して表示(移動なし)

*****************************************
  Plugin 'majutsushi/tagbar'
*****************************************
https://www.tomcky.net/entry/2018/03/17/002719
https://blog.verygoodtown.com/2013/03/development-user-style-guide/
https://www.mindmeister.com/1203144673
１　改善の目的
       ・生産性UP（作業の効率化（技術力、知識共有、開発ツール）、設計全体、日常業務）
       ・品質向上（エラー発生少ない、ソースコードガイドライン） 、
       ・

２　改善すべき仕事の範囲について
 　　　システムに関すること全て。
 　　　　例えばデバッグ手法、VSCODE使い熟し、設計やフォルダ構成の見直し、
 　　　　テスト全般必要テスト標準（必要なことテストする）、コーディング作業フロー、
 　　　　業務全般ツール使い熟し（メモアプリ、フォルダ内ファイル自動整理アプリなど）、
 　　　　クリーンコード化、〇〇〇の自動化、はまり抜け出し…
 　　　　
３　テーマ決め（１）出す　　
　　　スラックで改善チャンネルを作りテーマを出していく

４　テーマの決め（１）選択
　　出できたテーマからこれはやるべきと思うことを１名ずつ何個か選択(投票)する
　　
　　
５　テーマ決め（２）　決定
　　選択が多いものからやる価値があるか、現実的にできるか、
　　（実行した成果が生産性UP、品質向上につながる）判断し決定する
　　※ここは会議必要です。

６　テーマのゴール　理想の水準を定義

       ※ここは会議必要です。

６　やるべき課題の洗い出し
　　　
 

業務改善の具体例

７　具体的な例


８　やるメリット(成果物)とデメリット(副作用)
　　

９　で、今後はどのように進めるの


１０　５項目


１１　検討、選択、決定、GO !! 


いつから、スタート？？
なにを、どのように、改善？？


改善のライフサイクル
「導入期」→「成長期」→「成熟期」→「衰退期」
