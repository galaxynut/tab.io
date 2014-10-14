
# github blog搭建 #

参考这个做了一些改进[pelican + github page搭建blog](http://www.cnblogs.com/ballwql/p/pelican.html)

注意点：

1. 前面的python、pelican等等安装都没什么，make只是一个make.exe这个在csdn上可以弄到，
2. pelican不用像原文那样弄得太深，初入手简单一点，
3. 重点还是在git shell配置上，要保证可以pull，push；关于这些命令不喜欢记忆的可以参考下面引入的git windows客户端，配合shell简单快捷多了。

改进点：

- 使用git windows客户端（比较懒，记忆那些命令不行），其中关于windows git的配置这里要详细说一下，主要在于ssh文件的配置

    $ cd ~/.ssh   
    $ ls
    $ ssh-keygen -t rsa -C "your_email@youremail.com"

直接Enter就行。然后，会提示你输入密码，如下(建议输一个，安全一点，当然不输也行): Enter passphrase (empty for no passphrase): [Type a passphrase] 
Enter same passphrase again: [Type passphrase again]
完了之后，大概是这样。

    Your identification has been saved in /home/you/.ssh/id_rsa.pub

然后将id_rsa.pub中的公钥完全拷贝到github个人设置中的ssh设置密钥中

验证如下

    $ ssh -T git@github.com

如果得到如下，则说明验证成功

    Hi username! You've successfully authenticated, but GitHub does not # provide shell access.

剩下的我就比较懒了，使用windows git客户端，clone下来创建的github pages，如yourusername.github.io项目到本地， 然后将make html生成出来的output中的内容覆盖到yourusername.github.io project下，最后commit changes，然后sync，OK大功告成。

浏览器中输入yourusername.github.io就可以看到自己创建的blog了
