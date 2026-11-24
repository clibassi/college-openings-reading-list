# Lee (2018)

> Model-written summary (2026-11-24) of the paper's PDF: published version, Economic Inquiry 57(1), 316–332 (online early October 12, 2018; issue dated January 2019). Not checked against the paper by a person.

## File Name
Lee_LocalImpactUCMerced_2018.pdf

## Paper Title
The Local Economic Impact of a Large Research University: Evidence from UC Merced

## Basic Information
- Authors: Jongkwan Lee
- Year: 2018 (online early October 12, 2018; Vol. 57, No. 1, January 2019)
- Journal: Economic Inquiry, Vol. 57, No. 1, pp. 316–332 (doi:10.1111/ecin.12734)
- Field: Urban and regional economics; economics of higher education (JEL J24, O18, R11)
- Subfield: Local labor-market effects of a university opening; place-based development
- Study type: Single-treated-unit synthetic control on an MSA-level panel (quasi-experimental)

## Objective and Contribution (100-150 words)
Lee (2018) asks whether opening a large research university raises local employment in the short run. The setting is the 2005 opening of UC Merced, which the paper describes as the first American research university built in the 21st century (p. 2). Two problems motivate the design: campus locations are not random, because universities may follow innovative workers and firms, and most large research universities were founded when activity was less geographically concentrated, which limits modern policy relevance (p. 1). The contribution is a modern, single-case causal estimate that separates a demand effect (students and employees buying local services) from a productivity effect (knowledge spillovers). The headline result is a 13% increase in local employment over 2005–2014, mainly in nontraded industries (p. 1). The author reads this as a local labor-demand shock, not evidence of spillovers (p. 8–9).

## Methodology (200-300 words)
**Data.** Metropolitan Statistical Area (MSA) panel, 1991–2014. Nonfarm employment, sectoral employment and the unemployment rate come from BLS Metropolitan Area Employment and Unemployment; average weekly private wages from the Quarterly Census of Employment and Wages; firm counts from Business Dynamics Statistics; housing prices from the FHFA all-transactions index (p. 4, fn. 8).

**Design.** Synthetic control for one treated unit (Merced), with 2005 as the treatment year, the first undergraduate classes (p. 3). Donors are restricted to California MSAs to ensure common support, giving 22 MSAs including Merced (p. 2, fn. 2; p. 4).

**Identifying assumption.** Outcomes follow a factor model, $Y^N_{it} = \theta_t Z_i + \lambda_t \mu_i + \delta_t + \varepsilon_{it}$, where $Z_i$ are observables, $\lambda_t$ common factors, $\mu_i$ unit loadings and $\delta_t$ a time effect. A convex weight vector $W$ ($w_j \ge 0$, $\sum w_j = 1$) matching pre-treatment characteristics gives the counterfactual, and the effect is $\hat\alpha_{1t} = Y_{1t} - \sum_j w_j^* Y_{jt}$ (p. 5–6). Treatment has no effect before 2005.

**Estimation.** Outcomes are first residualized on the log of a predicted housing price index, $\hat P_{ct} = P_{c,1990} \times g^{-c}_t$, where $P_{c,1990}$ is MSA $c$'s 1990 index and $g^{-c}_t$ is the growth of the California index excluding $c$ (p. 5). Matching uses 2004 averages only, following Kaul, Klößner, Pfeifer, and Schieler (p. 6–7).

**Inference.** In-space placebos: a synthetic control is built for each of the other 21 MSAs. The statistic is the mean actual-minus-synthetic gap in 2005–2014 minus the mean gap in 2001–2004, ranked across MSAs with a one-sided p-value and RMSE normalization (p. 10–11, fn. 16).

**Threats.** The Merced housing bust, contamination of neighboring donors, nonstationary common factors, and industry-mix demand shifts (p. 7, 12–13).

## Sample and Setting (150-200 words)
Merced is a small San Joaquin Valley MSA with an agricultural base. The UC Regents authorized planning for a Valley campus in 1988, reviewed over 80 areas, advanced 20, and chose Merced, citing a Virginia Smith Trust land donation, proximity to Valley cities and water availability (p. 3). Groundbreaking was October 25, 2002, faculty arrived in 2003, graduate courses began in fall 2004 and undergraduate classes in fall 2005. Planning anticipates about 25,000 students (p. 3).

Relative to California's 22-MSA mean over 1996–2003, Merced had a higher unemployment rate (12.89% vs 8.97%), a smaller share college-educated (47.07% vs 61.63%), total employment of 48.2 thousand (vs 321.6), and larger agriculture and manufacturing shares (21.04% and 15.05% vs 14.09% and 12.26%) but a smaller service share (33.98% vs 42.47%) (Table 1, p. 4). Merced's housing price index fell by over 60% between 2006 and 2011, against about 45% for California (p. 4), which is the main confounder. The analysis window is 1991–2014 with 2005–2014 as post-period.

## Main Findings (200-300 words)
**Total employment.** The difference-in-difference statistic for log nonfarm employment is 0.129, ranked 22 of 22, p = 0.000 (Table 3, col. 1, p. 12). The text reports a 12.9% rise averaged over 2005–2014 (p. 11); the abstract rounds to 13%. Employment first dips relative to synthetic Merced after 2005, then exceeds it from 2006, with the largest gaps after 2008 (p. 8, p. 10).

**Other aggregates.** Effects on firms (0.111, rank 16/22, p = 0.272), the unemployment rate (−0.014, 19/22, p = 0.136) and weekly wages (0.059, 14/22, p = 0.364) are not significant (Table 3, cols. 2–4). The text still describes a 1.4 percentage-point lower unemployment rate and 5.9% higher wages (p. 11).

**Sectoral pattern.** Service employment rises by 0.186 (22/22, p = 0.000) and manufacturing by 0.012 (9/22, p = 0.591) (Table 3, cols. 5–6). Retail trade (0.171), leisure and hospitality (0.201) and education and health (0.107) are significant at 1%; professional services (0.219, p = 0.091) at 10%; information services (−0.093) and construction, logging and mining (0.196, p = 0.136) are not (Table 3, Panel B, p. 12).

**Robustness.** Detrending against the controls' average (Figure 7) and controlling for a Bartik index (Figure 8) leave the pattern intact (p. 12–13). Dropping Madera, Modesto and Fresno gives employment 0.137 (19/19) and service 0.186 (19/19), but retail trade 0.155 (p = 0.158) and leisure and hospitality 0.119 (p = 0.526) lose significance (Table A1, p. 16).

**Interpretation.** The author concludes the gains come from demand by students and employees, since tradable and knowledge-intensive sectors did not expand (p. 9).

## Key Figures and Tables
**Table 1 — Preperiod Labor Market Conditions, 1996–2003.** Compares Merced with Visalia, Fresno, Modesto, Stockton and the California mean on wages, unemployment, employment, housing prices, education and sector shares. Merced has the highest unemployment among the five cities except Visalia (12.89%, vs 13.73%) and the smallest total employment (48.2 thousand), which frames the demand-shock interpretation (p. 4).

**Table 2 — Synthetic Control Cities with Nonzero Weights.** Lists donor weights by matching outcome. For employment: Yuba City 34.3%, Santa Cruz 31.5%, Madera 13.8%, El Centro 11.5%, Modesto 8.8%. Wages load on Chico (44.4%), San Luis Obispo (31.5%) and El Centro (24.1%) (p. 6). The table's column layout is partly scrambled in the text dump, so the column-to-row mapping is inferred.

**Table 3 — Inference Using Permutations of 22 MSAs and Their Synthetic Controls.** The core results table, with difference-in-difference statistics, ranks and one-tailed p-values for aggregates (Panel A) and sectors (Panel B). Every reported p-value equals (22 − rank)/22, so a top rank yields 0.000 (p. 12).

**Table A1 — Inference: Droppping MSAs Close to Merced (using Permutations of 19 MSAs).** Repeats Table 3 without Madera, Modesto and Fresno. Aggregate employment and service results survive; retail trade and leisure and hospitality do not (p. 16).

**Figure 1 — The Housing Boom and Bust in Merced.** Plots Merced's housing price index against the California average, motivating the housing adjustment (p. 5). The plotted values are not recoverable from the text dump.

**Figure 3 — The Effects of UC Merced on Local Labor Market.** Merced versus synthetic Merced for log employment, log firms, unemployment and wages, 1991–2014 (p. 8). The author notes small pre-period wage deviations in 1995–2003 (p. 7–8).

**Figure 6 — Inference, Simulated Permutations, 22 MSAs (Actual—Synthetic Difference).** Placebo gaps for all 22 MSAs. Merced's employment gap after 2008 is the largest, while pretrend fit is worse for firms, unemployment and wages (p. 10–11). The caption says treatment is assumed in 2004.

## Critical Analysis (300-400 words)
This is a transparent single-case design, and the employment result is the most credible part. Merced ranks first among 22 units and the gap appears only after 2008, which is consistent with a gradual enrollment ramp (p. 10). Several features limit the causal claim.

First, a single treated unit with 21 placebos supports only coarse inference. The reported p-values equal (22 − rank)/22, which produces 0.000 for a top rank; a conventional exact permutation p-value would be at least 1/22, about 0.045 (my arithmetic from Table 3 ranks). The result is still the maximum rank, but "p = 0.000" overstates precision.

Second, timing coincides with the largest housing bust in the sample. The predicted-housing adjustment uses 1990 prices times California growth (p. 5), which is predetermined, but it controls for only one channel. Merced's treated gap emerges in 2008 and later, the same years as the bust and recovery, so a differential local recovery is a live alternative. The Bartik control (p. 12–13) helps, though the text defines shares from 1990 in one sentence and 1960 in another (p. 13).

Third, donor contamination. Madera and Modesto receive weight in Table 2 and are near Merced; the author says including them biases estimates down (p. 7, fn. 13). Dropping them keeps employment and service effects but weakens retail trade and leisure and hospitality (Table A1), so the sector detail is less robust than the headline.

Fourth, mechanism. Whether total nonfarm employment includes university staff themselves, and whether construction employment is counted, is not reported in this version. A 13% rise could partly reflect direct campus employment and construction, not induced demand. The firms, wages and unemployment results are not significant, so "benefits to the local economy" rests on employment alone. The post-period average also pools a dip in 2005 with later gains.

Fifth, matching on 2004 averages only (p. 6–7) leaves wage pretrends imperfect (p. 7–8).

Relevance to the project: the housing-adjusted synthetic control transfers to a single prominent 2-year college opening, but outcomes here are MSA sector employment, not firm entry or patents. The result is a short-run demand effect and is silent on industry mix or innovation.

## Research Gaps and Future Directions
- No outcomes on patents, firm entry or establishment-level industry composition; the number of firms is the only firm measure.
- Mechanism evidence is indirect: sector patterns stand in for student and employee spending, with no direct spending or enrollment data.
- Long-run productivity effects are untested (p. 3, 15); the author suggests local industries may need to become skill-intensive first.
- Only one treated unit, so heterogeneity across universities cannot be studied.
- The paper does not report job counts or a multiplier per campus employee or student.

## Implications and Future Research (100-150 words)
The paper shows that a new university can raise local service employment quickly through demand, even when tradable and knowledge-intensive sectors do not respond (p. 9, 15). For two-year college openings, the housing-adjusted synthetic control and the placebo-rank inference are directly reusable for a single prominent opening. The design transfers poorly to the project's main outcomes, because the data are MSA-level BLS employment by broad sector, with no firm-level, industry-mix or patent measures. The demand mechanism should be smaller for a community college with fewer residential students and few research staff. With many openings, a staggered difference-in-differences or stacked event study with county-level Business Dynamics Statistics and patent data would replace the single-case design.

## Keywords/Tags
#synthetic-control #university-opening #uc-merced #local-labor-demand #nontraded-sector #place-based-policy #permutation-inference #jel-j24 #jel-o18 #jel-r11

## Related Papers
- [[Kantor & Whalley (2014)]] Lee cites it as evidence that spillovers are larger for research-intensive, technologically close industries, and uses it to explain why Merced's tradable sectors did not grow (p. 3, 14).
- [[Liu (2015)]] Another synthetic-control study of universities (land-grant program); Lee contrasts its long-run manufacturing effects with the short-run service effects here (p. 3, 13).
- [[Bonander, Jakobsson, Podestà, & Svensson (2016)]] Swedish university reform, mostly small or no regional effects; Lee argues status upgrade differs from establishment (p. 13–14).
- [[Andrews (2023)]] Lee cites an earlier 2017 version on college establishment and local patenting (p. 2).
- [[Miller (2025)]] Corpus paper on Texas community college openings; the closest design neighbor for the project, not cited by Lee.
