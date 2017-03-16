---
layout: post
title:  "Today's Word is..."
date:   2017-03-16 010:58:00
categories: blog lessons
---
Is hidden in this giant string. So how do we find it?

### The Problem:
Given as part of the application process to Fog Creek (found [here](http://www.fogcreek.com/jobs/supportengineer)), this problem is as follows...

> Sort the characters in the following string:
{% highlight ruby %}

abcdefghijklmnopqrstuvwxyz_

{% endhighlight %}
> by the number of times the character appears in the following text (descending):

{% highlight ruby %}

hayjfltwmnlstaddvdkabpggxpcbmykiymbyphllzozvwjlkqrmaoxnsxqxjhvyrjykaddsoedcyitmevubhgelbmrtk_kxdizfgagidqvbvqrkhwscpenkdqatrcrhbucwmsv_qbygnjsydpr_mqftjviinseckyllydrbmsmyjaszwkdhnpjtk_awdokmpx_fzekzkttovqlfkqvwjbexvzwlnzaqwg_pqlorsmb_mavbuegnsvxptvbgcvairgdgsccac_ug_hbnkbu_svcbrjewiloukndywehdopjckulwwidrycoxsrpngacezescjtcutprmybxdivulcn_znajvbauio_jyahxxnyeyyznkoosgucjlzyqsptpbucirirywbpryjpktw_vl_unycyosq__alklnzv_qkpslqckzmuqbqfjiztsmskqdyxshhxkslvwx_bhaa_opivrqiandjfeyvowrnyysfaem_cgcvxuohpo__umqvbuqnrtcyijtrqsrfjpglsenwypljqixyjvkhogujuljtlowqghlwoonctrkcfwbzqqtqtmzef_elmbybryfiego_jknatrcrtecihdjsjzsytgpcomxkyduygnivcnq_gftnoc_tktdzuubehdjagd_caudrtgujkjzmhxdpvqsg_wyemsrvsdweyclxyhpqeeaphsyhahbbguogsuxsgtzaxktglhxg_xzeqjgmzhpmwfzwpufnrvdnkoyyrdqiwvxflndssbmanersenhltqtmvcmexdusczopalyxgqmopkedsvoszbu_sefquucivicerrnigkutzdojtnqtrfmocyjqs_b_eiqoncrudjccjnwhkjmmaanjsvkycryhxyyhimiebzoukiffcabhlujcwzfnhzlnhdvxyfxarcsqqjwgtbcugqftxrtqrspmpzczbrxpmrlqjqvqaylgvfhxezasdfrarlfxfrbofetptkljmztwvpwrswhmxhsny_bmlkxvyp_pendkcovvsfgkpjirrt_yhue_tgvkggz_shj_aldhfrvcfqxktkxyafaltwqzxoliocjitcikomih_mgygwvxvupgstjpfzbajdmjulbq_trsorfhfpulxnvdeoavcradzphqlngfi_on_kvllspucpxdamnws_ewgxalrlajoeaxxqqondjygfvqfa_ieuuemlozh_qyktxpypmmgou_izoroouiisnpsquplvapnqrmrecjilm_esnsz_steohcisskjioezirv_wlmoipuevrtwthybtrjqpuhuoacmnakhbikccacxb_eicdzwgwfmcdqet_fjum_zkbcokewropykow_cmfkpwuagxgxyfohejmxasb_lzxyzax_bgzjxsb_ollvzqwpyyndezpitwzdeeqthmrhqrhpzwxvdvliycsjiueoxrevkx_gjtpiowhpnit_rdwkocfxvivkfqkom_tjoimirz_ypyufouphocswbzfdprbiirfntvxtvytxgzwjaysxhptbenatxiaxwutrmiwbifqmpkwpmzmlkfzqnprskfsuvnphrbxysufcckssxwcbvapxbkfmum_meucimvshsawiucmimicnwnptynlghaeaaxtopadocumadecakteiw_ckczsvctsjwbaboqkzq_eouxfaiyexmf_iyrdjrkiuuudseoiuitxiyzwctiwgqwokiygfjzdbtimbpgfwypvtwkrgmcevfhqsekybgylzdvohlkwozsvxtkscuejhfjiwcummauh_lufqovxdwamlzfbr_uuquguwyplombdncgwaujpt_zsjziueozsblsxbjhgvzkuitdxaaxoxzm_akqgkulphkxdy_ttwrkxc_vmzqjelfiytessl_dxqitnlrocrmrmdcbudfxehd_wvxkjarnizentw_zoghv_iqjjgssfxeb_gbcu_ewymrelnpmpkteoibldnp_mtygdgauicswadrkagqeglugfa_fgv_oadajyqlsjjunvd_elotxznhrscujaljcqmm_ltlgdhazmzmppniqrs_ovmrioeouyrcuooso_mcuhfqvhtj_eoiomqsstpfrcmhxrrohkgyrdgeaamcbpghuduanwkuafuxbrvmpczqmwrzlur_fslnqbiew_nluucoyyn_yxviekfzmki_lqnijumpdbyptuvthgcvpkqshcs_abxwndxssacqxvbgcunoouhtlnkhlfefztckwntbomtralhdfvatdpyvojwgfjtrtwgwpdgbkh_wauyeda_aopit

{% endhighlight %}

> Now take the sorted string, and drop all the characters after (and including) the _. The remaining word is the answer.

Okay. It's a long string. A really long string.

### The Breakdown:

We need to count how many occurrences of each character there is in the string. A hash will do. As it often does. So lets create a variable called `big_string`.

Then, we call split on it so we can iterate over `big_string`. It'll look like `big_string_array = big_string.split("")`

So we have something to iterate over! So time to make a hash.

{% highlight ruby %}

  # We need something to store the occurrences.
  # So we make a new hash where the default value for all keys is 0.
  big_hash = Hash.new(0)

  # This will iterate over the newly split string.
  # Then adds 1 to any key that it iterates over.
  @big_string_array.each do |w|
    @big_hash[w] += 1
  end

{% endhighlight %}

The response is as follows: `{"h"=>77, "a"=>94, "y"=>92, "j"=>80, "f"=>74, "l"=>83, "t"=>97, "w"=>82, "m"=>95, "n"=>76, "s"=>98, "d"=>79, "v"=>85, "k"=>89, "b"=>75, "p"=>87, "g"=>81, "x"=>88, "c"=>100, "i"=>90, "z"=>78, "o"=>96, "q"=>84, "r"=>93, "e"=>86, "u"=>99, "_"=>91}`

Notice that while we have a proper count of all character occurences, it's not in order. Hash order is based on when values are put into the hash. That's not in any order that's meaningful to us. It's easiest to say that hashes simply aren't ordered.

So how do we sort this? By putting it into an array. A nested array at that.

We use a special little hash method called `sort_by`.

{% highlight ruby %}
  # sort_by returns a nested array,
  # with the key being the [0] index of the array,
  # and the value being the [1] index of the array,
  # all nested in one big array
  big_hash_array = big_hash.sort_by{|key,value| value}
{% endhighlight %}

The result: `[["f", 74], ["b", 75], ["n", 76], ["h", 77], ["z", 78], ["d", 79], ["j", 80], ["g", 81], ["w", 82], ["l", 83], ["q", 84], ["v", 85], ["e", 86], ["p", 87], ["x", 88], ["k", 89], ["i", 90], ["_", 91], ["y", 92], ["r", 93], ["a", 94], ["m", 95], ["o", 96], ["t", 97], ["s", 98], ["u", 99], ["c", 100]]`

It's in order now! Wait.

Wait. Hold up.

It's not in descending order. If we did the proper magic to construct our string (getting to that soon), the string we'd get from before the `_` would be `fbnhzdjgwlqvepxki`.

Not a word.

It needs to be reversed! That's the problem. It's not in descending order. So we will call `.reverse` on this array.

{% highlight ruby %}
  # It should look like this:
  big_hash_array = big_hash.sort_by{|key,value| value}.reverse
  # I could build my own reversal method,
  # but ruby is nice here and just lets you call a method.
{% endhighlight %}

Output now makes sense. It's `[["c", 100], ["u", 99], ["s", 98], ["t", 97], ["o", 96], ["m", 95], ["a", 94], ["r", 93], ["y", 92], ["_", 91], ["i", 90], ["k", 89], ["x", 88], ["p", 87], ["e", 86], ["v", 85], ["q", 84], ["l", 83], ["w", 82], ["g", 81], ["j", 80], ["d", 79], ["z", 78], ["h", 77], ["n", 76], ["b", 75], ["f", 74]]`.

We're not done yet. We could read this output and figure it out ourselves, but why? We have a computer, let's use it.

{% highlight ruby %}
  # Should be easy enough.
  # First, we make a container.
  secret_word = []

  # Then we iterate over our newly nested array.
    big_hash_array.each do |w|
  # If the "key" isn't the dreaded underscore,
  # we add it to our container.
      if w[0] != "_"
        secret_word << w[0]
  # But! If it is an underscore, we break the loop.
      else
        break
      end
    end
  # And then we join it all together.
  # Giving us our secret word...
    return secret_word.join("")
{% endhighlight %}

###### The Secret Word is...
`customary`

So there we go! We solved it! You can see the full code of my solution [here](https://github.com/descartez/fog-creek-admission/blob/master/solution.rb).

### The Odd Bit:
While I was writing tests for this, I realized that this approach only works if the word has no repeating characters. For example, `arial` won't work because the `a` in both places gets put into the same place. You will end up with `aril` as an output.